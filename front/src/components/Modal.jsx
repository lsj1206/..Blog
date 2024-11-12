// Modal Component
import React, { useState } from "react";
import { styled } from "../styles/Theme";
// Assets
import { XIcon } from "../assets/assets";
// Components
import IconButton from "./button/IconButton";

const Modal = ({ className, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay />
      <ModalContainer className={className}>
        <CancelBox>
          <IconButton size={[30, 30]} svgIcon={XIcon} onClick={onClose} />
        </CancelBox>
        <InsideBox>{children}</InsideBox>
      </ModalContainer>
    </>
  );
};

const Overlay = styled.div`
  z-index: 998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.bgMain};
  border-radius: 15px;
`;

const CancelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const InsideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;
`;

export default Modal;
