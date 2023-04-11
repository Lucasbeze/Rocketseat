import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color:${({theme})=> theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;

  > h1 {
    color: ${({theme})=> theme.COLORS.PINK};
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
 

  > img {
    width: 56px;
    height: 56px;
    border-radius:50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right:16px;
    line-height:24px;


    strong {
      font-size: 18px;
      color: ${({theme})=> theme.COLORS.WHITE};
    }

    button {
      
      
      border: none;
      background-color: transparent;
      width: 100px;
      text-align: end;
      font-size: 14px;
      
      text-decoration: none;
      color: ${({theme})=> theme.COLORS.GRAY_300};
    }
  }
`;