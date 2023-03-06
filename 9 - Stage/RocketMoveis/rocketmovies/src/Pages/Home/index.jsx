import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { Container, Form } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Meus Filmes</h1>
            <Link to="/create">+ Adicionar Filme</Link>
          </header>

          <Section>
            <h1>Interestellar</h1>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.</p>

            <Tags title="Ficção Científica"/>
            <Tags title="Drama"/>
            <Tags title="Fámilia"/>
          </Section>

          <Section>
            <h1>Interestellar</h1>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.</p>

            <Tags title="Ficção Científica"/>
            <Tags title="Drama"/>
            <Tags title="Fámilia"/>
          </Section>

          <Section>
            <h1>Interestellar</h1>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.</p>

            <Tags title="Ficção Científica"/>
            <Tags title="Drama"/>
            <Tags title="Fámilia"/>
          </Section>

          
        </Form>
      </main>
    </Container>
  )
};