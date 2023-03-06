
import { Container, Profile, Text } from './styles';

export function Header({icon: Icon, ...rest}){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Text>
        {Icon && <Icon size={20} />}
        <input {...rest} placeholder="Pesquisar pelo título"/>
      </Text>
      <Profile to="/profile">
        <img 
        src="https://github.com/lucasbeze.png" 
        alt="Foto do usuário" 
        />
        <div>
          <strong>Lucas Bezerra</strong>
          <span>sair</span>
        </div>
        
      </Profile>
    </Container>
  );
}