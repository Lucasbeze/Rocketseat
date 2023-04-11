import { Container, Profile } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";



export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <button onClick={signOut}>
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