import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

export default function Contato() {
  return (
    <Section>
      <h1>Fale Conosco</h1>
      <p>Entre em contato para um orçamento ou para tirar dúvidas!</p>
      <p>
        WhatsApp: <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">(99) 99999-9999</a>
      </p>
      <p>
        Email: <a href="mailto:contato@digitalmaster.com.br">contato@digitalmaster.com.br</a>
      </p>
    </Section>
  );
}