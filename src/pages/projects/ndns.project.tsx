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

const Ndns: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>사이드 프로젝트 : 내돈내산</h1>
      </ProjectHeader>
      <ProjectDetails>
        <Paragraph>
          <ul>
            <li>
              <a href="https://www.ndns.site">배포 주소</a>
            </li>
            <li>
              <a href="https://github.com/ndns-dev">깃허브 주소</a>
            </li>
          </ul>
          블로그 포스트의 협찬 여부를 자동 판별하여 내돈내산 포스트를 추천하는
          서비스입니다. 요즘 후기를 검색하면 협찬받은 포스트가 너무 많아서
          키워드만 검색해도 진정성 있는 포스트만 확인할 수 있도록 협찬 포스트를
          걸러내는 기능을 만들게 되었습니다.
        </Paragraph>
        <Paragraph>
          OCR 기반 이미지 분석을 병렬로 처리해야 하는 구조에서, 성능과 멱등성
          문제를 해결하기 위해 Node.js → Python → Go 언어로 기술 스택을
          전환하며, 최적화된 분산 설계와 실시간 스트리밍을 통한 응답 개선을
          구현했습니다.
        </Paragraph>
      </ProjectDetails>

      <br></br>
      <SectionTitle>트러블슈팅 및 기술 선택 근거</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>문제 인식</SubTitle>
          <DetailItem>
            - Node.js 기반의 OCR 병렬 처리 한계 (OCR 라이브러리의 멱등성 불안정,
            성능 저하)
            <br />
            - Python 전환 후에도 10개의 포스트를 분석하는 데 5~15초 소요
            <br />- 온프레미스 wsl 기반 환경 등 특정 환경에서 동시 요청이
            증가하면 OCR 실패 발생
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>성능 개선</SubTitle>
          <DetailItem>
            - OCR의 성능 향상과 멱등성 확보를 위해 Go 언어로 마이그레이션하여,
            평균 응답 시간을 2~4초 단축
            <br />
            - 동일 컨테이너 환경에서도 운영체제(WLS vs Linux) 차이에 따라 OCR
            실패율 편차가 발생함을 발견
            <br />- 이를 해결하기 위해 OCR 처리 로직을 AWS Lambda로 분리하여,
            항상 동일한 실행 환경을 확보하고 동시 처리 성능 문제를 해소
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>아키텍처 개선</SubTitle>
          <DetailItem>
            - GCP VM을 라우터 서버로 두고, EventBridge + Lambda로 각 API 서버의
            CPU 사용량, 요청 처리 성공률 등 상태를 주기적으로 수집 후 →
            Prometheus에 전달
            <br />
            - 라우터 서버는 Prometheus 메트릭 기반으로 서버 점수 산정 → 상태가
            양호한 서버로 요청 라우팅
            <br />- 모든 서버의 실패율이 일정 기준 초과 시 / api요청시 지정한
            확률대로 서버리스 환경 api + ocr(Cloud Run)으로 자동 fallback 처리
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>UX 개선</SubTitle>
          <DetailItem>
            - OCR 전 본문 체크/이미지 url 협찬 도메인 필터링으로 협찬 문구 확인
            시 즉시 응답 → 전체 분석 전에도 클라이언트에 결과 일부 표시
            <br />
            - SSE로 라우터 서버와 클라이언트 실시간 연결 유지
            <br />
            - OCR이 필요한 포스트만 SQS에 적재 → Lambda에서 개별 OCR 수행 → 결과
            수신 즉시 클라이언트에 전송
            <br />- 기존 10초 내외 응답 → 2초 내 첫 결과 도착, 전체 UX 대폭 개선
          </DetailItem>
        </SubSection>

        <SubSection>
          <SubTitle>구성 요소</SubTitle>
          <DetailItem>
            - Go 기반 API 서버 + Python OCR → Go로 통합
            <br />
            - 라우터 서버 + Prometheus + Metrics Cron + Lambda OCR 처리기 + SSE
            + SQS
            <br />- 서버리스 환경(Cloud Run)은 과금 고려하여 특정 조건에만
            한시적 사용
          </DetailItem>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(Ndns);
