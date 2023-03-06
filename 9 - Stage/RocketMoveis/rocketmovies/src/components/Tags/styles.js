import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 16px;
  border-radius: 5px;
  margin-right: 6px;
  background: ${({theme})=> theme.COLORS.BUTTON_COLOR};
`;