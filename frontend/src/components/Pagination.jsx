import React from "react";
import { styled } from "../styles/Theme";

//Components
import IconButton from "./buttons/IconButton";
// Icons
import { ReactComponent as LeftIcon } from "../assets/icons/angle-left-solid.svg";
import { ReactComponent as DoubleLeftIcon } from "../assets/icons/angles-left-solid.svg";
import { ReactComponent as RightIcon } from "../assets/icons/angle-right-solid.svg";
import { ReactComponent as DoubleRightIcon } from "../assets/icons/angles-right-solid.svg";

const Pagination = () => {
  return (
    <PaginationContainer>
      <IconButton onClick={() => {}} size={20} svgIcon={DoubleLeftIcon} />
      <IconButton onClick={() => {}} size={20} svgIcon={LeftIcon} />
      <p>1_2_3_4_5_6_7_8_9</p>
      <IconButton onClick={() => {}} size={20} svgIcon={RightIcon} />
      <IconButton onClick={() => {}} size={20} svgIcon={DoubleRightIcon} />
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

export default Pagination;
