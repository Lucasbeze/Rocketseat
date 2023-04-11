import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`;


export const Content = styled.div`
width: 1137px;

margin: 50px auto;

overflow-y: scroll;
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: transparent;
  padding: 2px;
}
::-webkit-scrollbar-thumb {
background-color: pink;
border-radius: 20px;
}


.subheader{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
`;

export const Search = styled.div`
width: 400px;
`;

export const NewMovie = styled(Link)`
width: 207px;
height: 48px;

display: flex;
align-items: center;
justify-content: center;

border:none;
border-radius:10px;

font-size: 16px;

color: ${({ theme }) => theme.COLORS.COLOR_BUTTON};
background-color: ${({ theme }) => theme.COLORS.PINK};

svg {
  margin-right: 8px;
}
`;