import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px ;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 80px ;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${({theme})=> theme.COLORS.PINK};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    button {
      background: transparent;
      border: none;
      text-align: end;
      font-size: 14px;
      color: ${({theme})=> theme.COLORS.GRAY_300};
    }
    strong {
      color: ${({theme})=> theme.COLORS.WHITE};
      font-size: 18px;
    }
  }
`;

export const Text = styled.div`
  width: 630px;
  display: flex;
  align-items: center;


  background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  color: ${({theme})=> theme.COLORS.BACKGROUND_600};

  margin-bottom: 8px;
  border-radius: 10px;

  > input{
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({theme})=> theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({theme})=> theme.COLORS.BACKGROUND_600};
    }

    > svg {
      margin-left: 16px;
    }
  }
`;