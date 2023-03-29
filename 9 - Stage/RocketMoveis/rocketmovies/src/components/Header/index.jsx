import { Container, Profile, Text } from './styles';
import { useAuth } from "../../hooks/auth";

import { api } from '../../services/api';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ icon: Icon, ...rest }) {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
 
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Text>
        {Icon && <Icon size={20} />}
        <input {...rest} placeholder="Pesquisar pelo título" />
      </Text>
      <Profile to="/profile">
        <img
          src={avatarURL}
          alt={user.name}
        />
        <div>
          <strong>{user.name}</strong>
          <button onClick={signOut}>sair</button>
        </div>

      </Profile>
    </Container>
  );
}