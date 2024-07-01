import React, { useEffect, useRef } from "react";
import GlobalStyle from "./styles/global.style";
import Navbar from "./components/navbar.component";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { styled } from "styled-components";
import Section from "./components/section.component";
import Home from "./pages/home.page";
import About from "./pages/about.page";
import Projects from "./pages/projects.page";
import Contact from "./pages/contact.page";
const App: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll(".section");
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          sections.forEach((section, index) => {
            if (
              scrollPosition >= (section as HTMLElement).offsetTop &&
              scrollPosition <
                (section as HTMLElement).offsetTop +
                  (section as HTMLElement).offsetHeight
            ) {
              if (mainContentRef.current) {
                const nextSection = sections[index + 1] as HTMLElement;
                if (nextSection) {
                  mainContentRef.current.scrollTo({
                    top: nextSection.offsetTop,
                    behavior: "smooth",
                  });
                }
              }
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <MainContent ref={mainContentRef}>
          <Section id="main" title="메인">
            <Home />
          </Section>
          <Section id="tech-stack" title="기술 스택">
            <About />
          </Section>
          <Section id="project-overview" title="프로젝트 개요">
            <Projects />
          </Section>
          <Section id="project-description" title="프로젝트 설명">
            <Projects />
          </Section>
          <Section id="contact" title="Contact">
            <Contact />
          </Section>
        </MainContent>
      </BrowserRouter>
    </RecoilRoot>
  );
};

const MainContent = styled.div`
  margin-left: 200px;
  padding: 20px;
`;

export default App;
