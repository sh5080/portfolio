import React from "react";
import webSocketSseImage from "../../assets/web-socket-sse.png";
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

const Alpha: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <h1>사내 프로젝트 : 데이팅 앱서비스 알파 (Nest.js) - qa 진행중</h1>
      </ProjectHeader>
      <ProjectDetails>
        <DetailItem>
          <strong>팀 구성:</strong> BE 2 | FE 3
        </DetailItem>
        <Paragraph>
          각 사용자가 제출하는 증빙자료를 통해 정량 평가하여 육각형 그래프를
          노출, 일반적으로는 매일 랜덤으로 3장의 카드를 생성하여 매칭을 진행하며
          과금되는 내용에 따라 육각형 그래프 및 가치관 설문 가중치로 추가 카드
          생성하여 매칭하는 서비스입니다.
        </Paragraph>
      </ProjectDetails>
      <br></br>
      <SectionTitle>구현한 내용 및 성과</SectionTitle>
      <Content>
        <SubSection>
          <SubTitle>동시성 문제 해결</SubTitle>
          <Paragraph>
            점수 계산, 카드 생성 로직의 경우 기존 데이터에 대한 값을 가져오면서
            작동하여 동시에 여러 사용자가 사용할 경우 서버가 죽는 문제가
            있었습니다.
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>해결 과정</strong>
          </DetailItem>
          <Paragraph>
            일단 먼저 테스트서버를 ec2 t2micro로 사용한 상태에서 프론트단에서
            스웨거 통해 api 요청에 문제 없게 돌려놓은 상태라 서버 자체의 한계를
            인지한 상태에서 어차피 물리적 한계에 의해 유저가 많아지면 부하가
            생길 것이므로 인스턴스를 업그레이드 하는 것은 최후 단계로 두고,
            다음과 같은 과정으로 먼저는 클라이언트 5명으로 두고 테스트코드를
            돌려 진행했습니다.
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>해결 방안1. DB 쿼리 개선</strong>
          </DetailItem>
          <DetailItem>
            <strong>- SQL 쿼리 직접 사용하여 Prisma 특성 개선</strong>
          </DetailItem>
          <Paragraph>
            Prisma는 단일 crud에 대해 결과값을 항상 같이 리턴하고 있어 트랜잭션
            도중 결과가 필요없는 쿼리의 경우 select쿼리가 불필요하게 쓰일 것으로
            예상했고, 중간중간 sql을 직접 삽입, sql의 의도와 prisma의 메서드
            이름이 헷갈리는 경우들이 있어 복잡한 쿼리의 경우도 sql을 직접
            삽입했습니다.
          </Paragraph>
          <DetailItem>
            <strong>- 동일 쿼리 bulk 방식으로의 변환</strong>
          </DetailItem>
          <Paragraph>
            여러 번 생성로직을 돌려야 하는 부분을 기존에 반복문으로 진행하고
            있어 bulkCreate 방식으로 배열 안에 여러 번 insert를 넣어 한번에
            처리했습니다.
            <Paragraph>
              각 DB쿼리 개선으로 응답시간에 대한 차이는 미미하나 유효한
              정도였지만, 5명이서 약 10번만에 죽던 서버가 2~30번까지는 작동하는
              것을 확인했습니다. 10번만에 죽는 것이 애초에 큰 문제였어서 공수를
              줄이기 위해 중간에 문제를 해결하면서 진척이 안느껴질 때마다
              t시리즈 안에서 인스턴스 변경을 같이 진행했습니다.
            </Paragraph>
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>해결 방안2. Queue 를 이용한 동시성 문제 대기열 처리</strong>
          </DetailItem>
          <Paragraph>
            점수 계산 로직의 경우 당장 계산된 결과를 보여주는 것이 아닌, 본인이
            상대방에게 점수를 주는데 성공했다는 결과값의 반환이 필요했고, 그와
            별도로 추후 결과를 조회했을 때 계산된 값, 평균 값 등 로직의 결과가
            들어가야 하여 컨트롤러 레이어에서 DB에 입력값 저장하는 동작과 큐에
            저장하는 동작을 구분하여 계산하는 로직만 대기열로 이동시켰습니다.
            <Paragraph>
              이 부분은 부하를 확인하고 진행한 것은 아니지만, 필요한 로직이지만
              당장 보여줘야 하는 값은 아니라서 역할을 구분하여 대기열로 보내는
              구조로 진행했습니다.
            </Paragraph>
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>해결 방안3. 로직 개선</strong>
          </DetailItem>
          <Paragraph>
            카드 생성 로직의 경우 랜덤생성시 불필요한 반복 / 조건 필터링을 잘
            설정하는 것이 일차적으로는 중요했고, 단일 1인 요청 기준 빨라도
            응답시간이 1초 이상, 늦으면 2초정도 소모되는 로직이라 먼저는
            응답속도 개선에 목표를 두고 로직을 개선했습니다. ( 데이터 반복
            생성시 필터링할 조건 Set구조로 메모리저장하여 체크 ) 또한 이미
            생성되었을 때 Redis에서 값을 조회하도록 하여 불필요한 리소스소모를
            방지했습니다.
          </Paragraph>
          <br></br>
          <DetailItem>
            <strong>추후 고도화 방향 제시: 로드밸런싱</strong>
          </DetailItem>
          <Paragraph>
            해당 서비스가 런칭하고 당장 유저가 처음부터 많이 몰릴 가능성은
            현저히 적고, 또한 인앱결제를 어느정도 유도하고 있어 동시에 이용하는
            유저가 타 앱보다는 많지 않을 수 있기에 목표를 먼저는 10명이
            안정적으로 해당 로직을 이용할 수 있는 것으로 목표를 잡고, 먼저는
            api서버를 2개로 개설해두고 당장 급할 경우 서버 증설을 하며 추후
            대기열에 넣는 구조로 제안하고 노션에 기록해 두었습니다.
          </Paragraph>
        </SubSection>
        <br></br>
        <SubSection>
          <SubTitleContainer>
            <SubTitle>
              Web Socket 이용한 채팅 / SSE 이용한 푸시알림 개발
            </SubTitle>
          </SubTitleContainer>
          <ImageContainer>
            <img
              src={webSocketSseImage}
              alt="Web Socket SSE Diagram"
              style={{ width: "700px" }}
            ></img>
          </ImageContainer>
          <DetailItem>
            <strong>문제: </strong>
          </DetailItem>
          <Paragraph>
            웹소켓으로 채팅을 구현하고 나서 푸시알림 또한 서버에서 전달해야 하여
            동일하게 웹소켓으로의 구현을 고민했고, 채팅방에 접속해야 소켓이
            열리는 상황과는 달리 푸시알림은 언제든 받을 준비를 해야 하여 소켓을
            계속해서 열고 있어야 하는 부담이 있었습니다.
          </Paragraph>
          <DetailItem>
            <strong>해결 방안:</strong>
          </DetailItem>
          <Paragraph>
            알림의 경우 클라이언트와 지속적으로 소통하는 것이 아니므로 특정
            조건에서의 알림은 SSE를 사용하여 해당 변화가 일어나는 시점에 SSE로
            상대방에게 전송하도록 해결했습니다.
          </Paragraph>
        </SubSection>
        <br></br>
        <SubSection>
          <SubTitle>TS / Nest 로의 마이그레이션, Type-safe 개발</SubTitle>
          <Paragraph>
            이전 사내 앱서비스가 대부분 JS로 구축되어 있었고,
            <strong> 불편을 당연시 여기는 아쉬운 습관들</strong>이 있었습니다.
            제가 합류하고 첫 프로젝트에서 TS로 마이그레이션을 진행했지만, 솔직히
            마이그레이션하면서 투자하는 리소스에 비해 개발속도가 진전된다거나
            안정성이 눈에 띄도록 좋아진다는 느낌을 받지는 못했었습니다. 제가
            봐도 그저 오류를 먼저 발견하냐, 나중에 발견하냐의 조삼모사 격의
            차이에서 조금의 안정성을 추가한 정도로 여겨졌습니다.
          </Paragraph>
          <Paragraph>
            <strong>해결 방안:</strong> TS, Nest로 마이그레이션 / Prisma 스키마,
            enum 등 커스텀 타입을 사용하여 개발
          </Paragraph>
          <Paragraph>
            팀장이 되고, 제가 팀원일 때부터 고민했던 부분은&nbsp;
            <strong>JS, express의 자유로움이 주는 불편함</strong>이였습니다. TS,
            Nest.js를 사용했을 때 프레임워크 자체, 혹은 강타입 언어에 대한
            러닝커브가 오히려 더 불편하지 않을지 고민하다가 팀원들과 소통하여
            조금 돌아가더라도 멀리 내다보고 유지보수, 또한 이후 프로젝트에서
            유연한 개발을 위해 TS로의 개발을 채택했고, Nest의 라이프사이클과
            기본적으로 제공하는 많은 기능들이 개발의 편의를 제공한다고 느껴
            채택했습니다.
          </Paragraph>
          <Paragraph>
            실제로 동료 백엔드 개발자가 TS로 마이그레이션하기 전과는 다르게 크게
            만족하였습니다. 추가적인 타입 구성으로 인해 초기 개발 공수는 크게
            빠르지는 않았지만, 유지보수에 있어 소통, 이해해야 하는 리소스가
            줄어드는 효과가 있었고, 효율적인 개발이 가능했습니다. 또한 어드민
            웹페이지를 개발하면서 같은 DB를 쓰기 때문에 같은 Prisma 모델을
            사용했고, 프론트 / 백에 동일한 스키마를 적용하여 any 없이&nbsp;
            <strong>컴파일 전에 확실하게 타입을 보장</strong>했고, DB에서 직접
            데이터를 조작하지 않는 한, 눈에 띄게 개발하면서의 휴먼이슈를 줄일 수
            있었습니다.
          </Paragraph>
        </SubSection>
        <br></br>
        <SubTitle>어드민 페이지 프론트엔드 React / 백엔드 Nest 개발</SubTitle>
        <SubSection>
          <DetailItem>- Recoil 및 Local storage을 이용한 상태관리</DetailItem>
          <DetailItem>
            - 백엔드의 Prisma에서 generate된 타입 공유하여 빠른 타입 정의 및
            개발
          </DetailItem>
          <DetailItem>
            - 회원관리 및 회원이 인증 요청한 정보 조회 및 처리 등 기획 니즈
            파악하여 기능 구현
          </DetailItem>
          <DetailItem>
            - 어드민에서 특정 기능 작동 시 사용자 클라이언트 서버로 SSE 알림
            전송
          </DetailItem>
          <DetailItem>- Quill 에디터로 공지사항 기능 구현</DetailItem>
        </SubSection>
      </Content>
    </ProjectContainer>
  );
};

export default FadeIn(Alpha);
