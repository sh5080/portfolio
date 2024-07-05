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
  SubTitleContainer,
  SubTitleLink,
  ProjectHeaderLink,
} from "./style";

const Onlyou: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>사이드 프로젝트 : 데이팅 앱서비스 온리유 (Nest.js)</h1>
        <h2>
          <ProjectHeaderLink
            href="https://onlyourlove.imweb.me"
            target="_blank"
          >
            https://onlyourlove.imweb.me
          </ProjectHeaderLink>
        </h2>
      </ProjectHeader>
      <ProjectDetails>
        <DetailItem>
          <strong>팀 구성:</strong> BE 2 | FE 2
        </DetailItem>
        <Paragraph>
          결혼정보회사가 매니징해주는 비용과 시간을 대체하여 사용자의 선지 및
          질의 응답을 통한 AI 매칭 알고리즘으로 이성을 매칭해주는 서비스입니다.
          유료 결제 후 매칭이 진행되었고, 성비가 거의 5대 5 수준으로 비슷하게
          이용되어 보다 빠른 매칭이 이루어질 수 있었습니다.
        </Paragraph>
      </ProjectDetails>
      <SectionTitle>구현한 내용 및 성과</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>Python &gt; Nest 로의 마이그레이션</SubTitle>
          <Paragraph>
            제가 합류하기 전에 다른 개발자의 도움을 받아 1차 MVP가 Python /
            FastAPI로 어느정도 구현되어 있었습니다. 개발 스택이 다르고 급하게
            진행된 내용이라 일관되지 않은 내용들이 많아 그대로 개발을 이어갈
            수는 없었지만, 언어는 달라도 결국 코드가 나타내는 바를 이해하는 것이
            중요하다고 생각하여 기획의도가 정해진 내용에 한해 Python 기존 코드를
            이해하고 Nest에서 구현했습니다.
          </Paragraph>
          <Paragraph>
            솔직히 언어에 대한 장벽보다 구현되어 있는 아키텍쳐 패턴이 정형화되어
            있지 않아 흐름을 파악하는데 시간을 더 투자한 것 같고, 이를 통해서
            구조와 패턴이 유지보수에 있어 얼마나 중요한지 배웠습니다.
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubTitle>치명적인 에러에 관한 처리</SubTitle>
          <Paragraph>
            단순히 디버깅에서 그치는 것이 아니라 배포 이후 예상치 못한 에러를
            어떻게 대응할 것인지에 대해 고찰하고, 서버 내 에러는 기본
            httpStatus외 응답코드를 두어 웹훅으로 실시간으로 알 수 있도록 구현,
            타 서버의 에러는 제공되는 Api의 공식문서 응답코드에 따라 적절한
            동작을 하도록 진행했습니다.
          </Paragraph>
          <Paragraph>
            서버 내 이슈는 및 부하 관련 이슈는 오토스케일링으로 분산처리, 타
            서버 이슈는 클라이언트에서 서버에서 리턴하는 응답을 보내줄 수 있도록
            소통하여 진행했습니다.
          </Paragraph>
          <Paragraph>
            해당 프로젝트를 통해 단순히 로드밸런싱 뿐 아니라 api서버간 소통할 수
            있는 sqs에 대해서도 공부하게 되었습니다. 덕분에 다음 프로젝트에서
            부하가 예상되는 로직을 queue에 넣고 순차적으로 작동시킬 수
            있었습니다.
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>JWT 인증전략 강화</SubTitle>
            <SubTitleLink
              href="https://prpn97.tistory.com/225"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://prpn97.tistory.com/225
            </SubTitleLink>
          </SubTitleContainer>
          <Paragraph>
            RTR (Refresh Token Rotation) 을 사용하여 토큰이 탈취되었을 때
            refresh되면 기존 토큰 무효화하도록 처리했습니다.
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>Restful API, 멱등성에 대한 이해</SubTitle>
            <SubTitleLink
              href="https://prpn97.tistory.com/250"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://prpn97.tistory.com/250
            </SubTitleLink>
          </SubTitleContainer>
          <Paragraph>
            어떤 Http 메서드를 사용해야 하는지 애매할 때 서버의 리소스에 대한
            멱등성을 기준으로 메서드를 선택, 해당 내용을 정리하고 이후 회사에
            공유하며 나눴습니다.
          </Paragraph>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(Onlyou);
