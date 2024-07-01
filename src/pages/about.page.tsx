import React from "react";
import styled from "styled-components";
import profileImage from "../assets/profile.jpg";
import FadeIn from "../components/fade-in.component";

const About: React.FC = () => {
  return (
    <AboutContainer className={"fade-in"}>
      <h1>소개</h1>
      <ProfileSection>
        <ProfileImage src={profileImage} alt="Profile" />
        <Info>
          <h1>김승환</h1>
          <ContactInfo>
            <p>Phone: 010-8603-5080</p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/sh5080"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/sh5080
              </a>
            </p>
            <p>
              Email: <a href="mailto:prpn97@gmail.com">prpn97@gmail.com</a>
            </p>
          </ContactInfo>
        </Info>
      </ProfileSection>
      <Description>
        <p>
          사람들과의 소통과 협업을 즐기고 코드 및 설계, 에러처리를 통해 UX, REST
          API와 DB CALL / Query 등 다양한 관점에서 비용 최적화를 위해 노력하는
          풀스택을 지향하는 개발자 김승환입니다. 무엇보다 코딩이 재밌어서 가능한
          선 안에서 동료들의 어려움을 퇴근하고 찾아보며 도움을 주고 있으며,
          직무라고 여기기보다는 재밌게 즐기고 있습니다.
        </p>
        <p>저의 가장 큰 장점은 첫 째는 끈기와 마인드입니다.</p>

        <p>
          제대로 공부하기 시작한 이후 단 하루도 빠짐 없이 공부, 작업하는
          내용들을 Github에, 기억해야 할 내용들은 블로그에 기록하고 있습니다.
          지금은 이제 막 성장해가는 부족한 개발자겠지만, 직장에서 뿐 아니라 퇴근
          이후에도 계속해서 공부, 작업하며 성장하여 그저 열심 뿐 아니라 회사에
          기여하고자 노력하고 있습니다.
        </p>
        <p>둘 째는 가치관입니다.</p>
        <p>
          주변 사람들에 비해 인생의 스토리가 꽤 많은데, 결국엔 이루지 못할 것은
          없다고 생각하면서도 현실적으로 당장의 최선은 무엇인가를 고려하는 점이
          개발에 있어서 타협점을 찾으면서 이상에 가깝도록 노력하고, 안주하지
          않고 계속해서 배움을 추구하는 장점이 되는 것 같습니다.
        </p>
        <p>
          때에 따라서는 외면하지 않고 지나치지 않을 때가 있습니다. 입사 초반에
          비효율적 (DB 쿼리) / 보안적 (SQL인젝션, Http 통한 api 요청)으로 불안한
          로직들이 있었고, 이사님은 당장 그 부분보다는 개발 진척을 원하셨고,
          할당량 작업 이후 퇴근 후에 앞서 언급한 내용들을 매일 작업했습니다.
        </p>
        <p>
          로직들 개선 이후 유의미한 성과가 있었습니다. 솔직히 당연한 것을 했을
          뿐이라고 생각하고 있고, 엄청난 것들을 진행한 것은 아니지만 리팩토링한
          결과 특정 로직에서 약 20%가량 응답시간 개선이 있었고, 좋게 봐주셔서
          현재 회사에서 팀장으로 일하고 있습니다.
        </p>
      </Description>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  h1 {
    text-align: left;
    font-size: 2.5rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    text-indent: 1em;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 180px;
  margin-left: 10px;
  margin-right: 40px;
`;

const Info = styled.div`
  flex: 1;
  text-align: left;
`;

const ContactInfo = styled.div`
  p {
    font-size: 1rem;
    margin: 5px 0;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.div`
  text-align: left;
  p {
    margin-top: 1.2em;
  }
`;

export default FadeIn(About);
