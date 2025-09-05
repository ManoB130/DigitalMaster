import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

export default function Sobre() {
  return (
    <Section>
      <h1>Sobre a Digital Master</h1>
      <p>
        Somos uma agência apaixonada por tecnologia, inovação e resultados. Ajudamos empresas a conquistar seu espaço no universo digital!
      </p>
    </Section>
  );
}