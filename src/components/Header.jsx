import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.azulEscuro};
  padding: 1.5rem 0;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
`;

const MenuItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.amarelo};
    font-weight: 700;
    font-size: 1.1rem;
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.teal};
    }
  }
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.amarelo};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  margin-right: 2rem;
`;

export default function Header() {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <Logo to="/">Digital Master</Logo>
        </MenuItem>
        <MenuItem>
          <Link to="/servicos">Serviços</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/portfolio">Portfólio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sobre">Sobre</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contato">Contato</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
}