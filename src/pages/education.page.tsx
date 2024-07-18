import React from "react";
import styled from "styled-components";
import FadeIn from "../components/fade-in.component";

const Education: React.FC = () => {
  return (
    <EducationContainer className={"fade-in"}>
      <h1>경력</h1>
      <Institution>
        <h3>(주) 뉴로서킷 | 개발 팀장</h3>
        <ul>
          <li>
            <strong>기간:</strong> 2024.01 - 현재
          </li>
        </ul>
      </Institution>
      <Institution>
        <h3>(주) 뉴로서킷 | 백엔드 팀원</h3>
        <ul>
          <li>
            <strong>기간:</strong> 2023.10 - 2023.12
          </li>
        </ul>
      </Institution>
      <h1>수료</h1>
      <Institution>
        <h3>Normaltic Segfault 모의해킹 6기 | 진행중</h3>
        <ul>
          <li>
            <strong>기간:</strong> 2024.04 - 현재
          </li>
        </ul>
      </Institution>
      <Institution>
        <h3>엘리스트랙 SW 4기 | 수료</h3>
        <ul>
          <li>
            <strong>기간:</strong> 2023.03 - 2023.06
          </li>
        </ul>
      </Institution>
      <h1>학력</h1>
      <Institution>
        <h3>총신대학교 대학원 | 석사 (중퇴)</h3>
        <ul>
          <li>
            <strong>전공:</strong> 목회학
          </li>
          <li>
            <strong>기간:</strong> 2021.03 - 2023.01
          </li>
        </ul>
      </Institution>
      <Institution>
        <h3>침례신학대학교 | 학사 (편입, 졸업)</h3>
        <ul>
          <li>
            <strong>전공:</strong> 신학
          </li>
          <li>
            <strong>기간:</strong> 2019.03 - 2021.02
          </li>
        </ul>
      </Institution>
      <Institution>
        <h3>학점은행제 | 수료</h3>
        <ul>
          <li>
            <strong>전공:</strong> 심리학
          </li>
          <li>
            <strong>기간:</strong> 2017.03 - 2019.02
          </li>
        </ul>
      </Institution>
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
    text-align: left;
  }

  li {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: bold;
  }
`;

const Institution = styled.div`
  margin-bottom: 2rem;
`;

export default FadeIn(Education);
