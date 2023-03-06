import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_600 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.BACKGROUND_600}` : "none"};

  border-radius:10px;
  padding:0 8px;

  > button {
    border:none;
    background:none;
    color:${({theme})=> theme.COLORS.PINK};
  }

  > input {
    height:56px;
    width:180px;

    padding:12px;

    color:${({theme})=> theme.COLORS.WHITE};
    background:transparent;

    border:none;

    &::placeholder {
      color: ${({theme})=> theme.COLORS.BACKGROUND_600};
    }
  }
`;