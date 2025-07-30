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
            <p>
              Blog:{" "}
              <a href="https://prpn97.tistory.com">
                https://prpn97.tistory.com
              </a>
            </p>
          </ContactInfo>
        </Info>
      </ProfileSection>
      <Description>
        <p>저를 3가지 키워드로 나타내고자 합니다.</p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          첫째는 문제 해결 입니다.
        </p>
        <p>
          저는 특출나게 알고리즘을 잘짠다. 이런건 잘 모르겠지만, 일을 잘할
          자신은 있습니다. 업무를 쳐내는데 있어서 우선순위는 늘 존재하고 서버와
          같이 저 역시도 병렬처리를 우선으로 둡니다. 테스트나 ci/cd를 돌려놓고
          코딩을 할 수 있는데 코딩만 주구장창 하고 있으면 이후 빌드한다고 계속
          기다려야 한다면 남는 시간이 생기는게 참 답답하고 그렇기에 그런 것들을
          유기적으로 조절하는데 능하다고 생각합니다.
        </p>
        <p>
          또한 자기가 아는 포지션이나 언어가 늘 좋고 중요한게 아니라 어떻게
          문제를 해결하는 것이 중요하다고 생각합니다. 해결하기 위해서 무엇을
          배워야 하는지 찾아서 배우고, 그것들을 적용하는 것이 중요하다고
          생각합니다. 당장 Node.js에 제가 능한 것은 맞지만 필요(최근에는 AWS)에
          의해선 Python을 쓰기도 했고, 최근 사이드 프로젝트에서는 효율적인
          병렬처리를 위해 Golang을 사용하기도 했습니다.
          <br />
          그래서 저는 일 잘 하는 개발자는 단순히 프론트 / 백이 아니라 모든
          포지션에 있어 두루 두루 다 자신 있고 적절한 타이밍에 적합한 엔지니어링을 하는 즉, 문제를 해결하는데 능한
          개발자라고 생각합니다.
        </p>
        <p>
          배포 과정 안에서 젠킨스와 쉘, 리눅스, aws를 통해 인프라 아키텍쳐를
          익혔습니다. 또한 내부망 안에서 구축하면서 포워딩과 네트워크에 대해
          공부할 수 있었고, 백오피스를 구축하면서 리액트를 익혔고, 서버개발을
          함에 있어서 다른 포지션을 이해했을 때 협업을 하는데 있어서 큰 도움이
          되고자 하는 목표가 있어 (예를 들면 프론트를 경험하면서 단순히 api명세
          뿐 아니라 코드레벨에서도 스키마를 어떻게 정리해서 주는게 효율적일지 더
          자세히 고민할 수 있었습니다.) 가리지 않고 다 재미있게 배우고 있는데,
          그렇다보니 자연스레 다른 언어나 기술에 있어서 거부감 없이 자연스레
          배우고 있습니다.
        </p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          둘째는 끈기 입니다.
        </p>
        <p>
          제대로 공부하기 시작한 이후 단 하루도 빠짐 없이 공부하고 있습니다.
          작업하는 내용들을 Github에, 기억해야 할 내용들은 블로그에 기록하고
          있습니다. 지금은 이제 막 성장해가는 부족한 개발자겠지만, 직장에서 뿐
          아니라 퇴근 이후에도 계속해서 공부, 작업하며 성장하여 그저 열심 뿐
          아니라 회사에 기여하고자 노력하고 있습니다.
        </p>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          셋째는 마인드 입니다.
        </p>
        <p>
          주변 사람들에 비해 인생의 스토리가 꽤 많은데, 결국엔 이루지 못할 것은
          없다고 생각하면서도 현실적으로 당장의 최선은 무엇인가를 고려하는 점이
          개발에 있어서 타협점을 찾으면서 이상에 가깝도록 노력하고, 안주하지
          않고 계속해서 배움을 추구하는 장점이 되는 것 같습니다.
        </p>
        <p>
          이전 회사에서는 리팩토링을 진행하면서 특정 로직에서 약 20%가량
          응답시간 개선이 있었고, 적극적으로 일을 찾아서 하는 모습들을 좋게
          봐주셔서 주니어지만 팀장으로 일하기도 했고, 그 경험들 기반으로 현재
          회사에서는 lg앱 서버 운영 / 유지보수 관련한 개발을 하고 있는데, 따로
          지시받은 업무는 아니지만 루틴한 업무들은 전부 저한테 넘어오기 전에
          백오피스를 통해 기획단에서 처리하도록 구현했고, pm 요구사항에 맞추어
          추가 개발, 유지보수를 진행하고 있습니다.
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
