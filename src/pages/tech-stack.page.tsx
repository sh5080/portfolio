import React from "react";
import styled from "styled-components";
import FadeIn from "../components/fade-in.component";
import { DetailItem, StrongIcon, StrongIconContainer } from "./projects/style";

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
      <DetailItem>
        자신 있는 스택은 다음과 같습니다.
        <br />
        5점 만점에 4점 이상은 겪은 트러블슈팅이 많아 자신이 있고, 3점은 겪은
        경험이 다소 부족할 수 있으나 회사 업무로 사용할 자신이 있습니다. 그
        아래는 구현 경험은 있으나 부족하여 필요한 상황이 온다면 열심히 공부해보겠습니다.
      </DetailItem>

      <Category>
        <h2>Backend</h2>
        <ul>
          <li>Language / Frameworks</li>
          <li>
            Nest.js / Express / TypeScript <Rating level={5} />
          </li>
          <li>
            tRPC / Fastify <Rating level={3} />
          </li>
          <li>
            Fiber / Go <Rating level={3} />
          </li>
          <li>
            FastAPI / Python <Rating level={1} />
          </li>
          <br />
          <li>SQL</li>
          <li>
            PostgreSQL, MySQL, Oracle / Prisma, Drizzle, Sequelize, TypeORM{" "}
            <Rating level={5} />
          </li>
          <br />
          <li>NoSQL</li>
          <li>
            Redis <Rating level={3} />
          </li>
          <li>
            MongoDB / Mongoose <Rating level={3} />
          </li>
          <li>
            DynamoDB <Rating level={2} />
          </li>
          <br />
          <li>Message Queue</li>
          <li>
            AWS SQS <Rating level={3} />
          </li>
          <li>
            Nest - Bull / RabbitMQ <Rating level={2} />
          </li>
        </ul>
      </Category>

      <Category>
        <h2>Frontend</h2>
        <ul>
          <li>
            Next.js / React <Rating level={3} />
          </li>
          <li>
            Tailwind CSS <Rating level={3} />
          </li>
        </ul>
      </Category>

      <Category>
        <h2>Network</h2>
        <ul>
          <li>
            Nginx (Reverse Proxy) <Rating level={4} />
          </li>
          <li>
            SSE (EventStream 처리) <Rating level={4} />
          </li>
          <li>
            WebSocket (Socket.io 등 활용 경험) <Rating level={3} />
          </li>
        </ul>
      </Category>

      <Category>
        <h2>Architecture</h2>
        <ul>
          <li>
            VPC 내 Bastion ↔ Private 구성, 3-tier 설계 기반 <Rating level={4} />
          </li>
          <li>
            필요에 따라 서버리스(Lambda/Cloud Run) 또는 서버(VM/EC2) 선택하여
            배포 <Rating level={4} />
          </li>
          <li>
            Prometheus + EventBridge 상태 기반 최적 서버 수동 로드밸런싱
            <Rating level={4} />
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
            Jenkins / Github Workflow <Rating level={3} />
          </li>
        </ul>
      </Category>

      <Category>
        <h2>Monitoring</h2>
        <ul>
          <li>
            AWS CloudWatch <Rating level={3} />
          </li>
          <li>
            Prometheus <Rating level={3} />
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
