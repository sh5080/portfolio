import React from "react";
import FadeIn from "../../components/fade-in.component";
import {
  ProjectContainer,
  ProjectHeader,
  SectionTitle,
  Content,
  SubSection,
  SubTitle,
  Paragraph,
  ProjectHeaderLink,
  SubTitleContainer,
  SubTitleLink,
  ImageContainer,
  NumberedList,
} from "./style";

const InfraStructure: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>사내 개발환경 세팅</h1>
        <h2>
          <ProjectHeaderLink
            href="https://github.com/sh5080/default-server"
            target="_blank"
          >
            https://github.com/sh5080/default-server
          </ProjectHeaderLink>
        </h2>
      </ProjectHeader>

      <SectionTitle>구현한 내용 및 성과</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>
            신규 프로젝트마다 바로 사용할 Nest / Prisma 및 DB 기본 Schema,
            보일러플레이트
          </SubTitle>
          <Paragraph>
            기존에는 프로젝트마다 서버를 처음부터 구축하고 있어 기본으로 가져갈
            보일러플레이트를 구축, 적용하여 현재까지 사용중에 있습니다.
            <ul>
              <li>Nest, Prisma, Redis 세팅</li>
              <li>
                JWT 인가 토큰에 userId, role 삽입 / access, refresh토큰 검증 및
                Redis 접속기록 저장, 로그아웃시 해당 토큰 블랙리스트 처리
              </li>
              <li>Pino를 통한 로깅</li>
              <li>에러처리, 이미지 미들웨어 / 응답값 필터링 인터셉터</li>
            </ul>
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>
              AWS VPC 및 Public / Private Subnet, 로드밸런싱 등 3tier
              Architecture
            </SubTitle>
            <SubTitleLink
              href="https://prpn97.tistory.com/186"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://prpn97.tistory.com/186
            </SubTitleLink>
          </SubTitleContainer>
          <Paragraph>
            정상적인 클라이언트만 열어둔 포트로 접속하게 되고, 내부 프라이빗
            서버에는 접속할 수 없도록 구축, 방법, 이해한 내용들을 정리했습니다.
          </Paragraph>
          <ImageContainer>
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1cqBP%2FbtszyL81z6d%2F4VHsQ7wzgF8KqVSVD3QKSk%2Fimg.png"
              alt="Security Architecture Diagram"
              style={{ width: "500px" }}
            />
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcuWbbt%2FbtszvF9zzR3%2Ft0MA4oKnh2baBxiSvTy6nK%2Fimg.png
              "
              alt="ALB"
              style={{ width: "300px" }}
            />
          </ImageContainer>
        </SubSection>
        <br></br>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>Jenkins CI / CD 배포 스크립트</SubTitle>
            <SubTitleLink
              href="https://github.com/sh5080/default-server/blob/backend/Jenkinsfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/sh5080/default-server/blob/backend/Jenkinsfile
            </SubTitleLink>
          </SubTitleContainer>
          <Paragraph>간단하게 프로세스를 정리하면 다음과 같습니다.</Paragraph>
          <NumberedList>
            <li>깃헙 체크아웃 - 풀: 소스코드 업데이트</li>
            <li>npm install: npm 패키지 업데이트</li>
            <li>서버 실행</li>
          </NumberedList>
          <li>성공시 웹훅 알림</li>
          <li>실패시 웹훅 알림</li>
        </SubSection>
        <br></br>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>스웨거 문서 개별 함수</SubTitle>
            <SubTitleLink
              href="https://prpn97.tistory.com/238"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://prpn97.tistory.com/238
            </SubTitleLink>
          </SubTitleContainer>
          <Paragraph>
            컨트롤러 레이어에서 스웨거 문서를 작성하는 것이 패턴의 의도와도 맞지
            않고, 클린하지 않은 코드로 유지보수의 공수를 줄이기 위하여 길면
            20줄이 넘어갈 수 있는 코드를 별도 swagger example util 안에 함수를
            구현하여 각 컨트롤러에서는 Import하여 정리했습니다.
          </Paragraph>
          <Paragraph>
            왼쪽은 위 아래 코드 정리를 비교한 것이고, 오른쪽은 스키마 자체를
            가져오게 될 경우 재사용한 예시 입니다.
          </Paragraph>
          <ImageContainer>
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FexhPpK%2FbtsFlOlEbU4%2Ftkgjp7tXNg92t8BupAthS0%2Fimg.png"
              alt="Security Architecture Diagram"
              style={{ width: "200px" }}
            />
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7Nksm%2FbtsFhRQ7oyW%2FxAZBeEZCfj0X3jrKI4akh1%2Fimg.png"
              alt="ALB"
              style={{ width: "500px" }}
            />
          </ImageContainer>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(InfraStructure);
