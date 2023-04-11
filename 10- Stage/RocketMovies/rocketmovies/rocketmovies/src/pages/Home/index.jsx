import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Search, Content, NewMovie } from './styles';

import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';

import { api } from '../../service/api';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from "../../components/Section"
import { NotesMovies } from "../../components/NotesMovies";


export function Home() {
  const navigate = useNavigate();
  
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

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

      <Content>

        <div className="subheader">
          <h1>Meus Filmes</h1>
          <Search>
            <Input
              placeholder="Pesquisar pelo Título"
              icon={AiOutlineSearch}
              onChange={e => setSearch(e.target.value)}
            />
          </Search>
          <NewMovie to="/create">
            <AiOutlinePlus size="16" />
            Adicionar filme
          </NewMovie>
        </div>

        <div className="sec">
          <Section>
            
            {
              movies.map(movie => (
                <NotesMovies
                  key={String(movie.id)}
                  data={movie}
                  onClick={() => handleDetails(movie.id)}
                />
              ))
            }

          </Section>
        </div>

      </Content>

    </Container>
  )
}