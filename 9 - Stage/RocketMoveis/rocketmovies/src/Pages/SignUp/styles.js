import styled from "styled-components";
import backgroundIMG from "../../assets/backgroundimg.jpeg"

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
  align-items: flex-start;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {

    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_50};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  > a{
    margin: 42px auto 0px;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    font-size: 16px;
    

    svg {
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundIMG}) no-repeat center center;
  background-size:cover;
`;