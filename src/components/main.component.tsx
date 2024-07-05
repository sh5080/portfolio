import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import AlphaProject from "../pages/projects/alpha.project";
import OnlyouProject from "../pages/projects/onlyou.project";
import OrotPlusProject from "../pages/projects/orot-plus.project";
import Section from "./section.component";
import Main from "../pages/main.page";
import About from "../pages/about.page";
import TechStack from "../pages/tech-stack.page";
import ProjectOverview from "../pages/project-overview.page";
import InfraStructureProject from "../pages/projects/infra-structure.project";
import SegfaultProject from "../pages/projects/segfault.project";
import Education from "../pages/education.page";

const MainContent: React.FC = () => {
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
    <MainContentContainer ref={mainContentRef}>
      <Section id="main">
        <Main />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="tech-stack">
        <TechStack />
      </Section>
      <Section id="project-overview">
        <ProjectOverview />
      </Section>
      <Section id="alpha">
        <AlphaProject />
      </Section>
      <Section id="segfault">
        <SegfaultProject />
      </Section>
      <Section id="infra-structure">
        <InfraStructureProject />
      </Section>
      <Section id="onlyou">
        <OnlyouProject />
      </Section>
      <Section id="orot-plus">
        <OrotPlusProject />
      </Section>
      <Section id="education">
        <Education />
      </Section>
    </MainContentContainer>
  );
};

const MainContentContainer = styled.div`
  margin-left: 200px;
  padding: 20px;
`;

export default MainContent;
