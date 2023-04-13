import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button{
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 22px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border:none;

    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};
    }
  }
`;