import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem 2rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.azulEscuro};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.teal};
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <Section>
      <Title>Bem-vindo à Digital Master</Title>
      <Subtitle>
        Agência especialista em Marketing Digital, Criação de Sites, Gestão de Redes Sociais, Tráfego Pago e SEO.
      </Subtitle>
      <p>
        Impulsione a presença online do seu negócio com estratégias personalizadas e resultados reais.
      </p>
    </Section>
  );
}