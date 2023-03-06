import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import {NoteItem} from '../../components/NoteItem'

export function Create() {
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
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observações"/>
          
          <h2>Marcadores</h2>
          <div className='Marcadores'>
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Novo Marcador"/>
          </div>

          <div className='dvs-tn'>
            <Button className="btnExcluir" title="Excluir filme"/>
            <Button title="Salvar alteração"/>
          </div>
          
        </Content>
      </main>
    </Container>
  )
}