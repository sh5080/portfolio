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

const Segfault: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>스터디: normaltic segfault 모의해킹 취업반 6기</h1>
        <h2>
          <ProjectHeaderLink href="https://segfaulthub.com/" target="_blank">
            https://segfaulthub.com/
          </ProjectHeaderLink>
        </h2>
      </ProjectHeader>
      <ProjectDetails>
        <Paragraph>
          쿠키에 HttpOnly, Secure.. 등 쿠키를 탈취당하지 않기 위해 설정한다거나
          CORS 문제를 해결하기 위해 서버에서 프론트와 연동할 포트만
          허용해준다거나 할 때 늘 답답한 구석이 있었는데, 물론 왜 해야 하는
          것인지 모를 때도 답답하지만, 어떻게 공격이 들어올지를 몰라서 이걸
          차단하면 다 되는건가? 싶은 그런 의구심이 있었습니다.
        </Paragraph>
        <Paragraph>
          단순히 이러한 공격이 들어올 수 있어서 남들 다 하는 처리를 똑같이 하는
          것 보다는 공격자가 어떻게 공격하고, 어떤 과정으로 이루어지는지를
          정확히 알고 싶어 배우게 되었습니다.
        </Paragraph>
      </ProjectDetails>
      <SectionTitle>배운 내용 / 적용점</SectionTitle>
      <Content>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>SQL 인젝션 공격</SubTitle>
            <SubTitleLink
              href="https://prpn97.tistory.com/267"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://prpn97.tistory.com/267
            </SubTitleLink>
          </SubTitleContainer>
          <Paragraph>
            이미 회사 처음 입사했을 때 Sql 인젝션에 노출되어 있는 코드를 보고
            기겁해서 고치기도 하고, 이 공격이 치명적이긴 하지만 prepared
            statements로 막을 수 있기도 하고 기본적으로 ORM의 메서드에는 이미
            내장되어 있기 때문에 배울 땐 솔직히 막는 방법을 다 알고 있다고
            생각해서 가볍게 여겼는데, 입력값 하나로 개인정보를 탈취할 수도, DB를
            날릴 수도 있고 포스팅에서 제가 시도한 것처럼 브루트포스로 하게 되면
            서버에도 영향을 미칠 수 있어 해당 의도 자체를 막아야겠다는 생각이
            들었습니다.
          </Paragraph>
          <Paragraph>
            prepared statements로 입력값을 대체하거나 화이트리스트를 구현하여
            특정 특수문자를 막는게 일반적으로 쓰이는 대응 방법인데, 더불어
            악의적인 입력값이 들어올 때 인터셉터에서 바로 ip를 차단하는 방법이
            유용하다고 생각합니다. 서버마다 DB 테이블 구조, SQL 로직도 각각
            다르기 때문에 한번에 모든 것을 파악하기엔 어려워 몇차례 입력을
            해보면서 파악을 하게 되는데, 그렇기 때문에 처음부터 차단시키고, 추후
            확인을 통해 제재를 해제하는 쪽으로 회사 기획팀에 제안을 드린
            상태입니다. 스터디가 끝나면 걸러낼 키워드에 대해서도 그렇고 다
            배우고 나서 보안책에 대해 npm 패키지를 구현할 계획중에 있습니다.
          </Paragraph>
        </SubSection>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>XSS</SubTitle>
            <SubTitleLink
              href="https://prpn97.tistory.com/271"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://prpn97.tistory.com/271
            </SubTitleLink>
            <SubTitleLink
              href="https://prpn97.tistory.com/272"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://prpn97.tistory.com/272
            </SubTitleLink>
          </SubTitleContainer>
          <Paragraph>
            XSS를 제대로 배우지 않았다면 이번 사내 프로젝트에서 놓칠 뻔한 부분이
            있었습니다. 게시글을 html에디터를 통해 입력한 값을 그대로 DB에
            저장하는데, 그렇다보니 악의적으로 스크립트를 저장하는 Stored XSS에
            노출된 상황이였고, db에 저장하기 전에 스크립트를 라이브러리나 여러
            방법을 통해 필터링하여 보안을 신경쓸 수 있었습니다.
          </Paragraph>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(Segfault);
