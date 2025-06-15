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
  SubTitleContainer,
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
          블로그 포스트의 협찬여부를 필터링하여 내돈내산 포스트를 추천하는
          서비스입니다.
        </Paragraph>
      </ProjectDetails>

      <br></br>
      <SectionTitle>구현한 내용 및 성과</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>구현 기능</SubTitle>
          <Paragraph>
            텍스트, 이미지 분석을 통해 점수를 부여하여 협찬 여부를 판단하도록
            구현했습니다.
            <br></br>
            깃허브에는 api서버, 라우터서버, metrics cron, prometheus, 프론트
            5가지로 구성되어 있습니다.
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>문제: </strong>
          </DetailItem>
          <Paragraph>탄력적 ip 사용시의 과금 비용 문제</Paragraph>
          물론 비용이 많이 드는 것은 아니지만, 비용을 절감할 수 있는 방법들을
          여러가지 고민하면서 가능하다면 구현하도록 했습니다.
          <DetailItem>
            <strong>해결 과정</strong>
          </DetailItem>
          <Paragraph>
            lambda에서 주기적으로 metric수집할 때 ec2 인스턴스의 public ip를
            조회하여 route53에 dns를 업데이트하는 방식으로 구현했습니다.
          </Paragraph>
          <DetailItem>
            <strong>문제: </strong>
          </DetailItem>
          <Paragraph>
            한번의 api콜 당 포스트를 10개씩 조회하여 분석하는 방식으로 구현했고,
            10개의 포스트를 분석하는데 무료 인스턴스를 사용시 10초 이상이
            소요되는 문제가 있었습니다.
          </Paragraph>
          <DetailItem>
            <strong>해결 과정</strong>
          </DetailItem>
          <Paragraph>
            포스트를 분석할 때 이미지 분석이 우선시되어 ocr을 병렬로 처리하여
            속도를 높이고자 했습니다. 처음에는 ocr을 파이썬으로 구현하는 것이
            익숙하여 파이썬으로 구현하였고, 병렬로 처리해도 이미지 분석 시간이
            오래 걸리는 문제가 있어 추후 서버리스로도 사용했을 때 콜드스타트
            문제를 줄일 수 있도록 초기 기능구현 이후 바로 Golang으로
            마이그레이션하여 속도를 높이고자 했습니다.
          </Paragraph>
          <DetailItem>
            <strong>개선 방향</strong>
          </DetailItem>
          <Paragraph>
            클라이언트에서 포스트 갯수를 줄이는 방법도 고민했지만, api 요청
            응답에 대한 속도개선 이외에도 안그래도 느린 속도에 동시성 문제가
            생겼을 때 무료 인스턴스를 사용하는 상황에서 문제가 발생할 수 있어
            다음과 같은 방향으로 진행했습니다.
            <ul>
              <li>별도 라우터 서버로 분리하여 로드밸런싱 및 부하분산</li>
              <li>
                AWS Lambda + Eventbridge로 주기적인 메트릭 수집 및 라우터서버에
                서버 상태 전달
              </li>
              <li>
                홈서버, vm에 각각 api 컨테이너 여유있게 두고 추후 오토스케일링
                방향 고려
              </li>
              <li>부하시 서버리스 환경으로 전환하여 요청 최적화</li>
            </ul>
          </Paragraph>
          <br></br>
        </SubSection>
        <br></br>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(Ndns);
