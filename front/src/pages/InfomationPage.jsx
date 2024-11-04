// 개발 정보 , 업데이트 현황 , 개발자 정보 등이 담기는 페이지

import React from "react";
import { styled } from "../styles/Theme";

import Header from "../layouts/Header";

const InfomationPage = () => {
  return (
    <>
      <Header />
      <InfomationPageContainer></InfomationPageContainer>
    </>
  );
};

const InfomationPageContainer = styled.div``;

export default InfomationPage;
