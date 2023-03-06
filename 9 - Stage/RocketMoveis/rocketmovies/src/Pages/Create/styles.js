import styled from "styled-components";

export const Container = styled.div`
display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

> main {
  grid-area: content;
  overflow-y: auto;
  padding: 40px 0;
}

.input-title {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;
}

.dvs-tn{
  width: 1000px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;

  .btnExcluir {
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    color: ${({theme})=> theme.COLORS.PINK};
  }
}
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  > h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }

  > h2 {
    font-size: 20px;
    color: ${({theme})=> theme.COLORS.GRAY_300};
    font-weight: 400;
    margin-bottom: 24px;
  }

  .btnVoltar {
    > a {
      text-decoration: none;
      color: ${({theme})=> theme.COLORS.PINK};
      display: flex;
      gap: 8px;
      align-items: center;
      margin-bottom: 24px;
    }
  }

  .Marcadores {

      width: 100%;
      height: 88px;
      background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
      border-radius: 10px;


      padding: 16px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-start;
      gap: 24px;
      
    }
`;
