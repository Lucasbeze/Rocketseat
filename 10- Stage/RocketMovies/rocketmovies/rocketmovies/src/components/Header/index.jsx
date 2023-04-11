import { Container, Profile } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useNavigate } from "react-router-dom";



export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate(-1);
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>
            Sair
          </button>
        </div>

        <img
          src={avatarUrl}
          alt={user.name}
        />
      </Profile>
    </Container>
  )
}