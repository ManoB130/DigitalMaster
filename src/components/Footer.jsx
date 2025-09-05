import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.azulEscuro};
  color: ${({ theme }) => theme.colors.amarelo};
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  font-size: 1.1rem;
`;

export default function Footer() {
  return (
    <FooterStyled>
      © {new Date().getFullYear()} Digital Master - Todos os direitos reservados.
    </FooterStyled>
  );
}