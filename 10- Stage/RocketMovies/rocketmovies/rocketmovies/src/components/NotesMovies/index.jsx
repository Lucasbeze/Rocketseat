import { Container } from "./styles";
import { Tags } from '../Tags';

export function NotesMovies({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <p>{data.description}</p>

      {
        data.tags &&

        <footer>
          { data.tags.map(tag => <Tags key={tag.id} title={tag.name} />) }
        </footer>
      }
    </Container>
  )
}