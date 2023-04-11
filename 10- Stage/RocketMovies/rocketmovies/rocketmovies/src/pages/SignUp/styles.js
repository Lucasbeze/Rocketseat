import styled from "styled-components";
import backgroundIMG from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  

  text-align:start;

  > h1 {
    font-size: 48px;
    color: ${({ theme })=> theme.COLORS.PINK};
  }

  > h2 {
    justify-content: start;
    font-size: 24px;
    margin: 48px 0;
    
  }

  > p {
    font-size: 14px;
    color: ${({ theme })=> theme.COLORS.GRAY_100};
  }

  .link {

    
    margin-top: 42px;
    display: flex ;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: ${({ theme })=> theme.COLORS.PINK};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundIMG}) no-repeat center center;
  background-size: cover;
`;