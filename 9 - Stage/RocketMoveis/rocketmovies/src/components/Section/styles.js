import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_500};
  border-radius: 10px;
  padding: 32px;
  margin-top: 40px;

  > h2 { 
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }

  > p {
    font-size: 16px;
    color: ${({theme})=> theme.COLORS.GRAY_50};
    margin-top: 15px;
    margin-bottom: 15px;
  }

  > svg {
    width: 12px;
    color: ${({theme})=> theme.COLORS.PINK};
  }
`;