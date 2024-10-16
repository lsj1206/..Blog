import * as styledComponents from "styled-components";

const color = {
  correct: "#5babab",
  present: "#fdb800",
  absent: "#908790",
};

export const light = {
  background1: "#fefefe",
  background2: "#dfdfdf", // dialog
  background3: "#a8a9ae",
  keyBg1: "#e3e1e3",
  keyBg2: "#cfcbcf",
  boardBg: "white",
  boardBorder1: "#070507",
  boardBorder2: "#555",
  button1: "#a098a0",
  button2: "#706570", // hover
  text: "#202124",
  bgText: "#ccc",
  btnText: "#555",
  color: { ...color },
};

export const dark = {
  background1: "#202124",
  background2: "#38393e", // dialog
  background3: "#88898e",
  keyBg1: "#403c40",
  keyBg2: "#766c76",
  boardBg: "#131213",
  boardBorder1: "#766c76",
  boardBorder2: "#202124",
  button1: "#5c565c",
  button2: "#908790", // hover
  text: "#fefefe",
  bgtext: "#aaa",
  btnText: "#aaa",
  color: { ...color },
};

// styled-components를 기본으로 내보냄
const { default: styled, createGlobalStyle } = styledComponents;
export { styled, createGlobalStyle };
