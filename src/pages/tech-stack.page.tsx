import React from "react";
import styled from "styled-components";
import FadeIn from "../components/fade-in.component";
import { StrongIcon, StrongIconContainer } from "./projects/style";

const Rating: React.FC<{ level: number }> = ({ level }) => {
  return (
    <StrongIconContainer>
      {[...Array(5)].map((_, i) => (
        <StrongIcon key={i} filled={i < level}>
          ●
        </StrongIcon>
      ))}
    </StrongIconContainer>
  );
};

const TechStack: React.FC = () => {
  return (
    <TechStackContainer className={"fade-in"}>
      <h1>기술 스택</h1>

      <Category>
        <h2>Backend</h2>
        <ul>
          <li>Language / Frameworks</li>
          <li>
            Nest.js / Express / TypeScript <Rating level={5} />
          </li>
          <li>
            Fiber / Go <Rating level={2} />
          </li>
          <li>
            FastAPI / Python <Rating level={1} />
          </li>
          <br></br>
          <li>SQL</li>
          <li>
            Mysql, PostgreSQL, Oracle / Prisma, Drizzle, Sequelize, TypeORM
            <Rating level={5} />
          </li>

          <br></br>
          <li>NOSQL</li>
          <li>
            Redis <Rating level={4} />
          </li>
          <li>
            MongoDB / Mongoose <Rating level={2} />
          </li>
          <li>SQS / SMS</li>
          <li>
            Nest - Bull / RabbitMQ <Rating level={3} />
          </li>
        </ul>
      </Category>
      <Category>
        <h2>Frontend</h2>
        <ul>
          <li>
            Next.js / React / TypeScript
            <Rating level={3} />
          </li>
          <li>
            Zustand / Tailwind
            <Rating level={3} />
          </li>
        </ul>
      </Category>
      <Category>
        <h2>Cloud</h2>
        <ul>
          <li>
            AWS EC2 + ELB / S3 + CloudFront (3-tier architecture)
            <Rating level={4} />
          </li>
          <li>
            AWS Lambda, GCP Cloud Run <Rating level={3} />
          </li>
          <li>
            Terraform <Rating level={2} />
          </li>
        </ul>
      </Category>
      <Category>
        <h2>CI / CD</h2>
        <ul>
          <li>
            Jenkins, GitHub Workflow / Serverless, SST <Rating level={4} />
          </li>
        </ul>
      </Category>
      <Category>
        <h2>DevOps</h2>
        <ul>
          <li>
            Docker / Docker Compose <Rating level={3} />
          </li>
          <li>
            Grafana / Prometheus <Rating level={2} />
          </li>
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
