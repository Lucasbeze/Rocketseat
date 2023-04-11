import { Container } from './styles';


export function Section({data, ...rest}){

  return(
    <Container {...rest}>
      <h2>{data.title}</h2>
      

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => {
              <span key={tag.id}>
                {tag.name}
              </span>
            })
          }
        </footer>
      }
    </Container>
  );
}