import React from "react";
import FadeIn from "../../components/fade-in.component";
import {
  ProjectContainer,
  ProjectHeader,
  ProjectDetails,
  DetailItem,
  SectionTitle,
  Content,
  SubSection,
  SubTitle,
  Paragraph,
} from "./style";

const OrotPlus: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>
          사내 프로젝트 : 임산부 스케쥴 관리 앱서비스 아이D, 오롯플러스
          (Node.js)
        </h1>
      </ProjectHeader>
      <ProjectDetails>
        <DetailItem>
          <strong>팀 구성:</strong> BE 2 | FE 5 (리팩토링 혼자 진행)
        </DetailItem>
        <DetailItem>
          임산부가 자신의 건강 상태, 스케쥴이나 태아의 상태 등 정보를 기록,
          임산부에게 추천하는 식단 및 레시피 / 상황별 대처법을 제공하고
          있습니다. 솔직히 리팩토링한 내용들이 기본적인 부분들이 많아서 당연한
          것일 수도 있지만, 그래도 그 기본을 충실히 지키고자 했고, 기본을 지키는
          것으로 유의미한 성과가 있었습니다.
        </DetailItem>
      </ProjectDetails>
      <SectionTitle>구현한 내용 및 성과</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>로직 / 에러처리 세분화</SubTitle>
          <Paragraph>
            <strong>문제:</strong> 대부분 에러처리가 되어있지 않았고, 컨트롤러 /
            서비스 로직이 모호한 부분이 많았으며 에러를 정상적인 데이터를 보내듯
            똑같이 즉시 던지지 않고 전달하여 컨트롤러에서 보내고 있었습니다.
            클라이언트단에서 생기는 오류에 대해서도 무조건 DB에 접근하는 등의
            불필요한 오버헤드가 가득했습니다.
          </Paragraph>
          <Paragraph>
            <strong>해결:</strong> 에러 핸들러 미들웨어 구현, 에러마다 인스턴스
            및 별도 구분 설정하여 클라이언트에게 세부적인 메세지를 보내줄지 혹은
            서버단에서만 로그로 확인할지 심각도에 따라 구분하도록 했습니다.
            에러가 발생하자마자 로직이 끊기게 개선하니 응답시간이 항상 디폴트로
            100ms 이상 소요되던 것들이 8~90% 개선되었습니다.
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubTitle>SQL 인젝션 공격 대비</SubTitle>
          <Paragraph>
            <strong>문제:</strong> ORM을 쓰고 있기는 했지만 모든 쿼리를 직접
            SQL문을 작성하여 사용하고 있었는데, 변수를 바로 SQL에 삽입하여 SQL
            인젝션 공격에 노출되어있는 상황이였습니다.
          </Paragraph>
          <Paragraph>
            <strong>해결:</strong>
            <ul>
              <li>
                find 등 간단한 메서드는 Sequelize 내부 메서드 사용 및
                재사용하도록 함 + 서비스, 모델 로직 분리하여 모델에 스키마 정의.
              </li>
              <li>
                복잡한 쿼리(여러 join 및 transaction)는 이미 의도대로 작동하고
                있고 변경될 가능성이 없어 그대로 SQL 그대로 사용하되 Sequelize의
                replacements 메서드를 통해 prepared statements로 대체하여 인젝션
                공격 방지.
              </li>
            </ul>
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubTitle>보안</SubTitle>
          <Paragraph>
            <strong>문제 1:</strong> Public subnet으로 구축되어 있어 public IP로
            접근할 수 있는 보안 취약에 노출되어 있음.
          </Paragraph>
          <Paragraph>
            <strong>해결:</strong> 별도 VPC 생성 및 Public / Private subnet으로
            구분, public / private subnet 각각 별도의 인스턴스로 구축하여
            public(bastion) 서버에서 private로 접근, private에 서버 구축하고
            subnet, 인스턴스마다 ssh, db 등 보안그룹, nacl 각각 설정하여 ip를
            제한하고 NAT 게이트웨이, 로드밸런서를 통해 서버와 클라이언트가 서로
            별도의 게이트를 통해 접근하도록 함.
          </Paragraph>
          <Paragraph>
            <strong>문제 2:</strong> S3의 url에서는 버킷의 경로가 노출되어
            버킷에 직접 액세스할 수 있는 상황.
          </Paragraph>
          <Paragraph>
            <strong>해결:</strong> S3에 cloudfront 적용하여 버킷에 직접 액세스를
            방지하고 별도의 도메인을 통해 접근하도록 함.
            <ul>
              <li>
                cloudfront에 서명된 url 사용하여 특정 사용자만 액세스 가능하도록
                함.
              </li>
              <li>
                버킷 경로가 노출되지 않음으로 보안 강화 / 직접 S3에 접근하지
                않고 cloudfront에서 서빙하여 트래픽 감소.
              </li>
            </ul>
          </Paragraph>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(OrotPlus);
