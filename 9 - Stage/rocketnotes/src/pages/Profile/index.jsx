import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [passwordOld, setpasswordOld] = useState();
  const [passwordNew, setpasswordNew] = useState();

  const avatarURL = user?.avatar ? `${api.defaults.baseURL}/files/${user?.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); //utilizamos o -1 para nao impilhar no historico da internet 
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    const userUpdate = Object.assign(user, updated);
    

    await updateProfile({ user: userUpdate, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft size={24}/>
        </button>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto de usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setpasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setpasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>

    </Container>
  )
};