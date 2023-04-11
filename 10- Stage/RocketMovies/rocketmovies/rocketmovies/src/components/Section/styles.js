import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
    margin-top: 0;
  }
`;