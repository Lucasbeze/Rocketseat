import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"
import { Link } from 'react-router-dom';

export function Header(){
  return(
    <Container>

      <Profile to="/profile">
        <img 
        src="https://github.com/lucasbeze.png" 
        alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Bezerra</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
};