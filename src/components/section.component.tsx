import React from "react";
import styled from "styled-components";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <SectionContainer id={id}>
      <h2>{title}</h2>
      <div>{children}</div>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  border-bottom: 1px solid #ccc;
`;

export default Section;
