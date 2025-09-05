import React from "react";
import styled from "styled-components";

const Button = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #25d366;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  z-index: 999;
  transition: background 0.2s;
  &:hover {
    background: #128c7e;
  }
`;

export default function WhatsAppButton() {
  return (
    <Button
      href="https://wa.me/5599999999999"
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco no WhatsApp"
    >
      <span role="img" aria-label="WhatsApp">💬</span> WhatsApp
    </Button>
  );
}