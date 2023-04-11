import { Container, Profile, Text } from './styles';
import { useAuth } from "../../hooks/auth";

import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ icon: Icon, ...rest }) {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Text>

        {Icon && <Icon size={20} />}
        

      </Text>
      <Profile to="/profile">
        <img
          src={avatarURL}
          alt={user.name}
        />
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>sair</button>
        </div>

      </Profile>
    </Container>
  );
}