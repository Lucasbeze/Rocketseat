import { useState, useEffect } from "react";
import { Container, Form } from "./styles";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { api } from "../../services/api";

import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Section';




export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Meus Filmes</h1>
            <input
              placeholder="Pesquisar pelo título"
              onChange={() => setSearch(e.target.value)}
            />
            <Link to="/create">+ Adicionar Filme</Link>
          </header>

          <Section >
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />

           
          </Section>




        </Form>
      </main>
    </Container>
  )
};