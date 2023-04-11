import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { useParams } from "react-router-dom";

import { api } from "../../service/api";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";
import { Buttontext } from "../../components/Buttontext";
import { AiOutlineArrowLeft, AiFillStar, AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";

export function Details() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);

      setData(response.data);
    }

    fetchMovie();
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        {
          data &&
          <main>

            <div className="btn">
              <Buttontext title="Voltar" icon={AiOutlineArrowLeft} onClick={handleBack} />
            </div>

            <div className="filme-title">
              <h1>{data.title}</h1>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>

            <div className="author-date">
              <img
                src={avatarUrl}
                alt={user.name}
              />
              <span>{user.name}</span >
              <AiOutlineClockCircle />
              <span>23/05/22 ás 08:00</span>
            </div>

           
              <div className="tags">
                {
                  data.tags &&
                  data.tags.map(tag => (
                    <Tags
                      key={ String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </div>
            

            <div className="text">
              <p>{data.description}</p>
            </div>

          </main>
        }
      </Content>
    </Container>
  )
};

