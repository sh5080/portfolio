import React from "react";
import styled from "styled-components";
import FadeIn from "../components/fade-in.component";

const TechStack: React.FC = () => {
  return (
    <TechStackContainer className={"fade-in"}>
      <h1>기술 스택</h1>
      <Category>
        <h2>Frontend</h2>
        <ul>
          <li>React / TypeScript</li>
          <li>Recoil / Tailwind (weak)</li>
        </ul>
      </Category>
      <Category>
        <h2>Backend</h2>
        <ul>
          <li>Nest / express / TypeScript</li>
          <br></br>
          <li>SQL</li>
          <li>Mysql / Prisma, TypeORM (Strong)</li>
          <li>Sequelize (weak)</li>
          <br></br>
          <li>NOSQL</li>
          <li> Redis (Strong)</li>
          <li>MongoDB / Mongoose (weak)</li>
          <li>SQS / SMS</li>
          <li> Nest - Bull / RabbitMQ (weak)</li>
        </ul>
      </Category>
      <Category>
        <h2>Cloud</h2>
        <ul>
          <li>AWS EC2 + ELB / S3 + CloudFront (3-tier architecture)</li>
          <li>AWS Lambda</li>
        </ul>
      </Category>
      <Category>
        <h2>CI / CD</h2>
        <ul>
          <li>Jenkins, GitHub Workflow / Serverless</li>
        </ul>
      </Category>
    </TechStackContainer>
  );
};

const TechStackContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    text-align: left;
  }

  li {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const Category = styled.div`
  margin-bottom: 2rem;
`;

export default FadeIn(TechStack);
