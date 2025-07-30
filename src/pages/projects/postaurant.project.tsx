import React from "react";

import FadeIn from "../../components/fade-in.component";
import {
  Content,
  DetailItem,
  Paragraph,
  ProjectContainer,
  ProjectDetails,
  ProjectHeader,
  SectionTitle,
  SubSection,
  SubTitle,
} from "./style";

const Postaurant: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>사이드 프로젝트 : AI 블로그 포스트 생성기 API</h1>
      </ProjectHeader>
      <ProjectDetails>
        <Paragraph>
          <ul>
            <li>
            <li>
              <a href="https://postaurant.site">배포 주소</a>
            </li>
            <li>
              <a href="https://github.com/sh5080/post-creator-api">깃허브 주소</a>
              </li>
            </li>
          </ul>
          NestJS와 Fastify를 기반으로 한 AI 블로그 포스트 생성 API 서비스입니다. 
          이미지 분석과 Gemini AI를 활용하여 사용자 요구사항에 맞는 블로그 포스트를 자동으로 생성합니다.
          
          주변에서 필요로 하는 기능을 구현하다가 조금 더 확장성 있는 서비스를 만들기 위해 블로그 포스트 생성기 API 서비스를 만들게 되었습니다. 
          처음에는 api형식이여서 서버리스로 개발을 시작했고, 서버리스 환경을 자체적인 api로 구현해본 것은 처음인데, 약간의 콜드스타트가 있지만 가성비가 매우 뛰어나고 오히려 트래픽이 많아져도 일시적인 애플리케이션 레벨에서의 해결보다 vm으로 자연스럽게 마이그레이션하면서 확장할 계획 중에 있습니다.

          테스트 계정: testuser1@test.com / test123123!
        </Paragraph>
        <Paragraph>
          JWT 기반 인증 시스템과 AWS S3 연동을 통해 안전한 파일 업로드를 구현했으며, 
          PostgreSQL과 Drizzle ORM을 활용한 데이터 관리, Google Cloud Run을 통한 
          서버리스 배포까지 전체적인 백엔드 시스템을 구축했습니다.
        </Paragraph>
      </ProjectDetails>

      <br></br>
      <SectionTitle>주요 기능 및 기술 구현</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>AI 기반 블로그 포스트 생성</SubTitle>
          <DetailItem>
            - Google Gemini API를 활용한 블로그 포스트 생성
            <br />
            - 최대 5개 이미지 동시 처리 및 분석 기능
            <br />
            - 기술, 라이프, 여행, 음식, 패션 카테고리 분류 지원
            <br />
            - 사용자 요구사항에 맞는 맞춤형 포스트 생성
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>템플릿 시스템 및 사용자 관리</SubTitle>
          <DetailItem>
            - 재사용 가능한 포스트 템플릿 생성 및 관리
            <br />
            - 템플릿 즐겨찾기 기능으로 자주 사용하는 템플릿 관리
            <br />
            - 공개/비공개 템플릿 설정으로 커뮤니티 기능 제공
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>파일 업로드 및 저장</SubTitle>
          <DetailItem>
            - AWS S3 연동을 통한 안전한 이미지 저장 및 관리
            <br />
            - Fastify Multipart를 활용한 효율적인 파일 업로드 처리
            <br />
            - 이미지 형식 검증 (JPG, PNG) 및 크기 제한 (10MB)
            <br />
            - 다중 이미지 동시 업로드 지원
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>데이터베이스 설계</SubTitle>
          <DetailItem>
            - PostgreSQL 데이터베이스와 Drizzle ORM을 활용한 타입 안전한 데이터 관리
            <br />
            - 사용자, 포스트, 템플릿, 즐겨찾기 등 스키마 설계
            <br />
            - 마이그레이션 시스템을 통한 스키마 변경 관리
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>서버리스 배포 및 운영</SubTitle>
          <DetailItem>
            - Google Cloud Run을 통한 서버리스 배포
            <br />
            - Google Artifact Registry를 활용한 컨테이너 이미지 관리
            <br />
            - Pino를 활용한 구조화된 로깅 시스템
            <br />
            - 환경별 로깅 설정 (개발: Pretty print, 프로덕션: JSON)
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>보안 및 성능 최적화</SubTitle>
          <DetailItem>
            - API Token을 통한 요청당 인증으로 보안 강화
            <br />
            - Joi를 활용한 엄격한 입력 데이터 검증
            <br />
            - 인터셉터를 통한 표준화된 API 응답 형식
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>구성 요소</SubTitle>
          <DetailItem>
            - NestJS + Fastify + GCP Cloud Run 기반 서버리스 API 서버
            <br />
            - PostgreSQL (Neon) + Drizzle ORM
            <br />
            - Google Gemini API + AWS S3
            <br />
            - Google Cloud Run + Artifact Registry
          </DetailItem>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(Postaurant); 