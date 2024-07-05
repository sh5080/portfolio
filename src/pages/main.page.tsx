import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

const Home: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFadeIn(true);
          setTimeout(() => {
            setShowAdditionalText(true);
          }, 700); // 0.7초 후 추가 텍스트 표시
        } else {
          setFadeIn(false);
          setShowAdditionalText(false);
        }
      },
      {
        threshold: 0.5, // 텍스트의 50%가 뷰포트에 들어오면 트리거
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <HomeContainer>
      <FadeInText ref={textRef} className={fadeIn ? "fade-in" : ""}>
        안녕하세요. 풀스택을 지향하는, 소통하는 개발자 김승환 입니다.
      </FadeInText>
      <AdditionalTextContainer className={showAdditionalText ? "fade-in" : ""}>
        <AdditionalText>
          지금부터 저에 대해 소개하려 합니다.
          <br />
          순서는 다음과 같이 진행됩니다.
          <List>
            <ListItem>
              <StyledLink to="about" smooth={true} duration={500}>
                소개
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="tech-stack" smooth={true} duration={500}>
                기술 스택
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="project-overview" smooth={true} duration={500}>
                프로젝트 개요
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="alpha" smooth={true} duration={500}>
                프로젝트 설명
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="motivation" smooth={true} duration={500}>
                지원 동기
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="education" smooth={true} duration={500}>
                학력
              </StyledLink>
            </ListItem>
          </List>
        </AdditionalText>
      </AdditionalTextContainer>
    </HomeContainer>
  );
};

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUpAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // background: #fff;
  text-align: center;
  position: relative;
`;

const FadeInText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0;

  &.fade-in {
    animation: ${fadeInAnimation} 0.7s ease-in forwards;
  }
`;

const AdditionalTextContainer = styled.div`
  opacity: 0;
  margin-top: 20px;

  &.fade-in {
    animation: ${fadeInAnimation} 0.7s ease-in forwards,
      ${slideUpAnimation} 0.7s ease-in forwards;
  }
`;

const AdditionalText = styled.div`
  font-size: 1.25rem;

  &.fade-in {
    animation: ${fadeInAnimation} 1s ease-in forwards;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Home;
