import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background:"transparent";
    }

    ::-webkit-scrollbar-thumb {
      border-radius:10px;
      background: ${({theme})=> theme.COLORS.PINK};
    }
  }

  .tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
  }

`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 38px auto;


  .btn-two {
    margin-top: 40px;
    display: flex;
    gap: 40px;

    > button:nth-child(1){
      background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
      color:${({theme})=> theme.COLORS.PINK};
    }
  }

  > h1 {
    font-size: 20px;
    color: ${({theme})=> theme.COLORS.COLOR_P};
    margin: 20px 0;
  }

  .inputs {
    display: flex;
    gap: 40px;
  }

  .marcadores { 

    width: 1137px;
    padding: 20px;

    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};

    border-radius:10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap:wrap;

  }

  > header {
    margin: 24px 0 40px 0;
    gap: 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    a {
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: ${({theme})=> theme.COLORS.PINK};

      svg {
        font-size: 16px;
      }
    }
  }
`;