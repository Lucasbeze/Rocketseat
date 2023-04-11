import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  
`;


export const Form = styled.form`
  max-width: 1057px;
  margin: 38px auto;


  ::-webkit-scrollbar{
    width: 20px;
  }

  ::-webkit-scrollbar-track{
    background-color: #000;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #303;
  }


  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      border: none;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.PINK};

      width: 207px;
      height: 48px;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      font-size: 16px;
      text-align: center;
      padding: 12px;

    }
    > input{
    height: 56px;
    width: 400px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 0;
    border-radius: 10px;

    &:placeholder {
      
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
  }

`;