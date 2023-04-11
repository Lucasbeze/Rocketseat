import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Content } from './styles';

export function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState('')


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


  async function handleNewNote() {
    if(!title){
      return alert("Digite o título do Filme")
    }

    if(!rating) {
      return alert("Digite um número para a nota")
    }

    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não cliclou em adicionar.Clique para adicionar ou deixe o campo vazio.");
    }

    await api.post("/movies", {
      title,
      description,
      tags,
      rating: Number(rating)
    });
    alert("Nota criada com sucesso!")
  }

  async function handleRemoveNote() {
    const removeNote = confirm("Tem certeza que deseja descartar ?");

    if (removeNote) {
      navigate("/");
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div className='btnVoltar'>
            <Link to="/"><AiOutlineArrowLeft /> Voltar</Link>
          </div>
          <h1>Novo Filme</h1>
          <div className='input-title'>
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

          <h2>Marcadores</h2>
          <div className='Marcadores'>
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
              isNew
              placeholder="Novo Marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <div className='dvs-tn'>
            <Button
              className="btnExcluir"
              title="Excluir filme"
              onClick={handleRemoveNote}
            />
            <Button
              title="Salvar alteração"
              onClick={handleNewNote}
            />
          </div>

        </Content>
      </main>
    </Container>
  )
}