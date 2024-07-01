import React from "react";
import styled from "styled-components";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner src="/assets/spinner.gif" alt="로딩중입니다." />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f2f5;
`;

const Spinner = styled.img`
  width: 50px;
  height: 50px;
`;

export default Loading;
