import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

export default function Portfolio() {
  return (
    <Section>
      <h1>Portfólio</h1>
      <p>Veja alguns dos nossos projetos de sucesso!</p>
      {/* Aqui você pode adicionar cards ou imagens dos seus projetos */}
    </Section>
  );
}