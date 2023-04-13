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
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: flex-start;
  }

.btn {
 margin-top: 40px;
}

 .filme-title{
   display: flex;
   flex-direction: rows;
   align-items: center;
   gap:10px;
   margin-top: 24px;

   h1 {
     font-weight: 500;
     font-size: 36px;  
     line-height: 47px;
     color: white;
   }
   color: ${({ theme }) => theme.COLORS.PINK};
  }

 .author-date {
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;

   display: flex;
   align-items: center;
   margin-top: 24px;
   gap: 8px;

    > img {
     width: 16px;
     height: 16px;
     border-radius: 50%;
    }

   > svg {
     color: ${({ theme }) => theme.COLORS.PINK};
    }
 }
 .tags {
   margin-top: 24px;
   display: flex;
  }

 .text {
   margin-top: 40px;
   margin-bottom: 0;
   font-weight: 400;
   font-size: 16px;
   line-height: 21px;
   display: flex;
   align-items: center;
   text-align: justify;
  }
  `;