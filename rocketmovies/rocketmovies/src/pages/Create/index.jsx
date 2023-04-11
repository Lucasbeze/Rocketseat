import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { FiArrowLeft } from "react-icons/fi";

import { api } from '../../service/api';

import { Container, Form } from './styles';

export function Create() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleNewMovie() {
    if(!title || !description || !rating){
      return alert('Por favor preencha todos os campos')
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar.");
    }

    await api.post("/movies", {
      title,
      description,
      rating:Number(rating),
      tags,
    });

    alert("Filme cadastrado com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>

          <header>
            <Link onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </Link>
            <h1>Novo Filme</h1>
          </header>

          <div className="inputs">
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <h1>Marcadores</h1>
          <div className="marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem
                isNew={true}
                placeholder="Novo Marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </div>

          <div className="btn-two">
            <Button
              title="Excluir filme"
              onClick={handleBack}
            />
            <Button
              title="Salvar alterações"
              onClick={handleNewMovie}
            />
          </div>

        </Form>
      </main>
    </Container>
  );
}