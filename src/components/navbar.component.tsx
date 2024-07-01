import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="main" smooth={true} duration={500}>
            메인
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="tech-stack" smooth={true} duration={500}>
            기술 스택
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="project-overview" smooth={true} duration={500}>
            프로젝트 개요
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="project-description" smooth={true} duration={500}>
            프로젝트 설명
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="education" smooth={true} duration={500}>
            학력
          </StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #333;
  padding: 10px;
  height: 100vh;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavItem = styled.li`
  margin: 10px 0;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
