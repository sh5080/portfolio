import React, { useState } from "react";
import webSocketSseImage from "../../assets/web-socket-sse.png";
import erdImage from "../../assets/alpha-erd.png";

import FadeIn from "../../components/fade-in.component";
import {
  Content,
  DetailItem,
  ImageContainer,
  Paragraph,
  ProjectContainer,
  ProjectDetails,
  ProjectHeader,
  SectionTitle,
  SubSection,
  SubTitle,
  SubTitleContainer,
} from "./style";

const Lg: React.FC = () => {
  const [isErdVisible, setIsErdVisible] = useState(false);

  const toggleErdVisibility = () => {
    setIsErdVisible(!isErdVisible);
  };

  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>
          사내 프로젝트 : LG 멤버십 앱 운영, 유지보수 / 백오피스 및 관련 모듈
          개발
        </h1>
      </ProjectHeader>
      <ProjectDetails>
        <Paragraph>
          LG 멤버십 앱 운영하며 에러 관련 api 유지보수, 서버 점검을 하고
          있습니다. 또한 백오피스 및 푸시알림 관련 모듈 개발하고 있고, 기획
          니즈에 따라 추가 기능구현 하고 있습니다.
        </Paragraph>
      </ProjectDetails>

      <br></br>
      <SectionTitle>구현한 내용 및 성과</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>부하 문제 해결 및 백오피스 개발</SubTitle>
          <Paragraph>
            기존 설치되어 있는 구축형 솔루션 콘솔에서 한번에 발송가능한 발송
            수가 제한적이였고, 내부적으로 별도 모듈을 구현하여 콘솔보다 다량의
            알림을 끊기지 않도록 구축했고, 추후에는 기존 솔루션과는 아예 별개의
            모듈을 구현하여 회당 평균 약 6만건의 푸시알림을 전송하고 있습니다.
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>해결 과정</strong>
          </DetailItem>
          <Paragraph>
            db에 대량의 로그가 쌓여 있어 콘솔 자체에도 로딩 및 부하가 있었고,
            db에 적재한 큐의 양이 많을 때 무리가 있어 솔루션에서는 1회당 최대
            2000건의 타겟으로만 발송이 가능했습니다. <br></br>이 문제를 해결하기
            위해 식별자 및 발송데이터를 엑셀로 받아 타겟을 추출하여 mq에
            적재하여 콘솔에서 허용하는 2000건의 데이터가 발송완료되어 큐에서
            사라질 쯤 job을 실행하여 발송하는 방식으로 해결했습니다.
          </Paragraph>
          <DetailItem>
            <strong>이후 개발</strong>
          </DetailItem>
          <Paragraph>
            콘솔 자체의 한계가 있어 솔루션을 변경하게 되었는데, 기존 모듈에서
            발송하는 중간 구현체를 대체하여 효율적인 발송을 구현하고 있습니다.
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>백오피스 개발</strong>
          </DetailItem>
          <Paragraph>
            백오피스에서 회원 / 쿠폰 조회 및 처리, 앱 상태 변경, 푸시발송 및
            조회 등 기획 니즈 파악하여 기능 구현하고 있습니다.
          </Paragraph>
        </SubSection>
        <br></br>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>
              Oracle 11g / Javascript 및 JS진영 ORM 간의 호환 문제
            </SubTitle>
          </SubTitleContainer>

          <DetailItem>
            <strong>문제: </strong>
          </DetailItem>
          <Paragraph>
            기존 솔루션은 인덱스를 bigint로 사용하고 있는데, 데이터를 조회했을
            때 Javascript의 데이터 Number 타입 범위를 초과하여 정확하지 않은
            인덱스를 반환하는 오류가 있었습니다. DB에서 넘어오는 순간 숫자가
            정확하지 않게 반환되었고, bigint를 TO_CHAR 함수로 변환하여 정확한
            인덱스를 반환하는 방식으로 해결하려 했으나 Oracle 11g 버전에서는
            사용할 수 없었습니다. ORM을 통해 string타입으로 받아와도 정확한
            인덱스를 반환하지 않았습니다.
          </Paragraph>
          <DetailItem>
            <strong>해결 방안:</strong>
          </DetailItem>
          <Paragraph>
            DB 레벨에서 애플리케이션 레벨로 데이터가 전달되기 직전에 이미
            변환되어야 한다고 파악, sql을 통해 여러 방법으로 시도했으나 실패,
            ORM에서 모델로 타입을 지정하면 해결할 수 있다고 판단했습니다.
            (ORM에서 Oracle을 지원하기 때문에 타입을 변환하거나 인식하는 정확한
            sql을 세팅할 수 있을 것이라고 생각했습니다.) Oracle을 지원하는 ORM은
            TypeORM, Sequelize가 있었고, 그 중 TypeORM에서는 Oracle에서의 bigint
            타입을 지원하지 않아 타입 변환이 어려웠고, Sequelize에서는 bigint를
            지원하여 타입을 그대로 받아올 수 있었습니다. 이 안에서도
            Sequelize에서는 스키마를 그대로 모델로 pull하는 sequelize-auto
            라이브러리가 Oracle을 지원하지 않아 라이브러리를 뜯어고쳐서 db
            스키마를 그대로 가져와서 사용할 수 있었습니다.
          </Paragraph>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(Lg);
