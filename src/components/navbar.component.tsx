import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const [isProjectsOpen, setProjectsOpen] = useState(false);

  const handleProjectsClick = () => {
    setProjectsOpen(!isProjectsOpen);
  };

  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="main" smooth={true} duration={500}>
            메인
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="about" smooth={true} duration={500}>
            소개
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
          <StyledLink to="" onClick={handleProjectsClick}>
            프로젝트 설명
          </StyledLink>
        </NavItem>
        {isProjectsOpen && (
          <>
            <NavItem className="sub-item">
              <StyledLink to="postaurant" smooth={true} duration={500}>
                사이드: 블로그 포스트 생성기
              </StyledLink>
            </NavItem>
            <NavItem className="sub-item">
              <StyledLink to="ndns" smooth={true} duration={500}>
                사이드: 내돈내산
              </StyledLink>
            </NavItem>
            <NavItem className="sub-item">
              <StyledLink to="lg" smooth={true} duration={500}>
                사내: LG 멤버십 앱
              </StyledLink>
            </NavItem>
            <NavItem className="sub-item">
              <StyledLink to="alpha" smooth={true} duration={500}>
                사내: 알파
              </StyledLink>
            </NavItem>
            <NavItem className="sub-item">
              <StyledLink to="segfault" smooth={true} duration={500}>
                모의해킹 스터디
              </StyledLink>
            </NavItem>
            <NavItem className="sub-item">
              <StyledLink to="infra-structure" smooth={true} duration={500}>
                사내 개발환경 세팅
              </StyledLink>
            </NavItem>
            <NavItem className="sub-item">
              <StyledLink to="onlyou" smooth={true} duration={500}>
                사이드: 온리유
              </StyledLink>
            </NavItem>
            <NavItem className="sub-item">
              <StyledLink to="orot-plus" smooth={true} duration={500}>
                사내: 아이D, 오롯
              </StyledLink>
            </NavItem>
          </>
        )}
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
  padding: 20px;
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
  &.sub-item {
    margin-left: 20px;
  }
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
