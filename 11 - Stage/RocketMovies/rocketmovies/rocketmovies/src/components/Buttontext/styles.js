import styled from "styled-components";

export const Container = styled.button`

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  gap: 8px;
`;