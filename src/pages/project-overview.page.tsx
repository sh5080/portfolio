import React from "react";
import styled from "styled-components";
import FadeIn from "../components/fade-in.component";
import { Link as ScrollLink } from "react-scroll";

const ProjectOverview: React.FC = () => {
  return (
    <ProjectOverviewContainer>
      <h1>프로젝트 및 성장 개요</h1>
      <Project>
        <ProjectLink to="ndns" smooth={true} duration={500}>
          <h2>사이드 프로젝트: 내돈내산</h2>
          <h3>2025.04 ~ 현재</h3>
        </ProjectLink>
        <ul>
          <li>협찬 필터링 기능 구현</li>
          <li>파이썬에서 Golang으로 마이그레이션</li>
          <li>별도 라우터 서버를 통한 로드밸런싱</li>
          <li>
            AWS Lambda + Eventbridge로 주기적인 prometheus 메트릭 수집 및
            라우터서버에 서버 상태 전달
          </li>
        </ul>
      </Project>
      <Project>
        <ProjectLink to="lg" smooth={true} duration={500}>
          <h2>
            사내 프로젝트: LG 멤버십 앱 운영, 유지보수 / 백오피스 및 관련 모듈
            개발
          </h2>
          <h3>2024.08 ~ 현재</h3>
        </ProjectLink>
        <ul>
          <li>LG 멤버십 앱 운영, api 개발 및 유지보수</li>
          <li>회당 평균 약 6만건 푸시알림 전송 모듈 개발</li>
          <li>백오피스 React 웹페이지, Node.js 서버 개발</li>
          <li>내부망 내 백오피스 서버 배포 및 ci/cd 파이프라인 구축</li>
        </ul>
      </Project>
      <Project>
        <ProjectLink to="alpha" smooth={true} duration={500}>
          <h2>사내 프로젝트: 데이팅 앱서비스 - 알파</h2>
          <h3>2024.03 ~ 2024.07</h3>
        </ProjectLink>
        <ul>
          <li>동시성 문제 해결 위한 Queue / 웹소켓 채팅 / sse 알림 구현</li>
          <li>크론, sse 서버리스 aws lambda 구축</li>
          <li>
            Nest 메인서버 개발, 로드밸런싱 + 오토스케일링으로 서버 재가동 및
            private 인스턴스에 배포
          </li>
          <li>React 어드민 웹페이지 프론트 / Nest 서버 개발</li>
          <li>jira 이용하여 프로젝트 전체 PM</li>
        </ul>
      </Project>
      <Project>
        <ProjectLink to="normaltic" smooth={true} duration={500}>
          <h2>스터디: normaltic segfault 모의해킹 취업반 6기 </h2>
          <h3>2024.04 ~ 2024.08</h3>
        </ProjectLink>
        <ul>
          <li>웹해킹 기초, SQL 인젝션 방법, xss 및 CTF 문제풀이</li>
          <li>현업 모의해킹 보안 대비 프로세스 이해</li>
        </ul>
      </Project>
      <Project>
        <ProjectLink to="infra-structure" smooth={true} duration={500}>
          <h2>사내 개발 환경 및 인프라, 스터디 창구 세팅</h2>
          <h3>2024.01 ~ 2024.02</h3>
        </ProjectLink>
        <ul>
          <li>
            신규 프로젝트마다 바로 사용할 Nest / Prisma 및 DB 기본 Schema,
            보일러플레이트
          </li>
          <li>
            AWS VPC 및 Public / Private Subnet, 로드밸런싱 등 3tier Architecture
          </li>
          <li>Jenkins CI / CD 배포 스크립트</li>
          <li>스웨거 문서 개별 함수</li>
          <li>노션 트러블슈팅 / 레퍼런스 공유할 템플릿</li>
        </ul>
      </Project>
      <Project>
        <ProjectLink to="onlyou" smooth={true} duration={500}>
          <h2>사이드 프로젝트: 데이팅 앱서비스 - 온리유</h2>
          <h3>2023.11 ~ 2024.01</h3>
        </ProjectLink>
        <ul>
          <li>DB 스키마 정의 및 상세 릴레이션 정리, 보일러플레이트 세팅</li>
          <li>Jenkins CI / CD 배포</li>
          <li>기본적인 api 구현 및 프론트 소통</li>
          <li>aws lambda 통한 요청 분산</li>
          <li>DB 스키마 정의 및 상세 릴레이션 정리</li>
        </ul>
      </Project>
      <Project>
        <ProjectLink to="orot-plus" smooth={true} duration={500}>
          <h2>
            사내 프로젝트: 임산부 스케쥴 관리, 자기점검 앱서비스 - 아이D,
            오롯플러스
          </h2>
          <h3>2023.10 ~ 2023.12</h3>
        </ProjectLink>
        <ul>
          <li>
            *기존 서비스 API 리팩토링 &rarr; response time 약 22% 가량 개선
          </li>
          <li>http메서드 Restful 하도록 프론트와 소통하여 수정</li>
          <li>
            컨트롤러 / 서비스 로직 분리, 에러처리 미들웨어 / SQL 로직 세분화 /
            트랜잭션 처리
          </li>
          <li>
            SQL문에서 작동하거나 반복문으로 DB 접근하는 로직 DTO 통한 로직으로
            수정
          </li>
          <li>
            Mysql view로 정리된 데이터 SELECT할 때 부하, 직접 쿼리 Join 하도록
            개선
          </li>
          <li>중복 컬럼 외래 키 지정 및 id값으로 최소화</li>
          <li>
            AWS EC2 3tier Architecture 도입, S3 + Cloudfront, 서명 URL 이용하여
            보안 이슈 해결
          </li>
          <li>
            이미지 업데이트시 일부 S3에서 지워지지 않는 이슈 해결 / 이미지
            리사이징
          </li>
          <li>
            *신규 서비스 소통방식 제안, 전반적인 점검 &rarr; 프론트에서 큰 만족,
            문서화 원함
          </li>
          <li>
            API 명세서 및 Sequence, ERD 정리 및 프론트와 소통, 이전 서비스에서
            잦은 API수정 줄임
          </li>
          <li>불필요한 오버헤드 및 API테스트 집중 점검</li>
        </ul>
      </Project>
    </ProjectOverviewContainer>
  );
};

const ProjectOverviewContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Project = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  h3 {
    align-items: center;
    margin-bottom: 1rem;
  }
  ul {
    list-style: disc;
    padding-left: 20px;
  }

  li {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    text-indent: -20px;
    padding-left: 20px;
  }
`;
const ProjectLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default FadeIn(ProjectOverview);
