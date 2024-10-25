// Sidebar Box1의 About Icon Button으로 진입하는,
// 일반적인 홈페이지의 Footer에 작성되는 요소들이나
// 블로그의 개발 정보 , 업데이트 현황 , 개발자 정보 등이 담기는 페이지

import React from "react";
import { styled } from "../styles/Theme";

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <Title>게시글 목록</Title>
      <Line $marginTop={5} $marginBottom={15} />
      <Line $marginTop={15} $marginBottom={5} />
    </AboutPageContainer>
  );
};

const AboutPageContainer = styled.div``;

const Title = styled.h2`
  padding-top: 25px;
`;

const Line = styled.div`
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default AboutPage;
