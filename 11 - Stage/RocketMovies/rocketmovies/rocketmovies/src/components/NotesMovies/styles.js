import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_ONE};
  

  border:none;
  border-radius:10px;

  padding:22px;
  margin-bottom:16px;

  > h1 {
    flex:1 ;
    text-align: left;
    font-weight:700;
    font-size:24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    margin-top:15px;
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.COLORS.COLOR_P};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;