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
    padding: 64px 0;
    
  }
  
  .header-cnt{
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 19px;

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .btn-back{
    
    color: ${({ theme }) => theme.COLORS.PINK};
    white-space: 8px;

    > svg {
      margin-right: 8px;
    }
  }

  .NameTime {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 24px;
    > img{
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    > svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .tags {
    margin-top: 40px;
  }
  .obs {
    height: 274px;
  }
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SectionText = styled.section`
  margin: 56px 0 28px;
  padding: 32px;
  text-align: justify;
  overflow-y: scroll;
  > h2 { 
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: ${({theme})=> theme.COLORS.GRAY_100};
    
    padding-bottom:16px ;
    margin-bottom: 24px;
  }
`;