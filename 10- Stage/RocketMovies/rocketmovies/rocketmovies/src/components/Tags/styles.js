import styled from "styled-components";

export const Container = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 12px;
   padding: 5px 14px;
   border-radius:5px;
   margin-right: 6px;
   color: ${({ theme }) => theme.COLORS.COLOR_BUTTONTAG};
   background-color: ${({ theme }) => theme.COLORS.COLOR_BUTTON};
`;