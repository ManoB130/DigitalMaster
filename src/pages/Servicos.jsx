import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

export default function Servicos() {
  return (
    <Section>
      <h1>Nossos Serviços</h1>
      <ul>
        <li>Criação de Sites profissionais</li>
        <li>Gestão de Redes Sociais</li>
        <li>Tráfego Pago (Google, Facebook, Instagram)</li>
        <li>SEO e Otimização de Sites</li>
        <li>Design Gráfico e Identidade Visual</li>
      </ul>
    </Section>
  );
}