import * as styledComponents from "styled-components";

const color = {
  correct: "#5babab",
  present: "#fdb800",
  absent: "#908790",
};

export const light = {
  text: "black",
  bgMain: "white",
  bgLayout: "#E8E8E8",
  bgSub: "#C3C3C3",
  bgText: "#AAAAAA",
  btn: "#A9A9A9",
  btnText: "#696969",
  btnActive: "#585858",
  btnActiveText: "#C0C0C0",
  brLine: "#585858",
  warningText: "#8B0000",
  color: { ...color },
};

export const dark = {
  text: "white",
  bgMain: "#282828",
  bgLayout: "#383838",
  bgSub: "#606060",
  bgText: "#808080",
  btn: "#505050",
  btnText: "#808080",
  btnActive: "#909090",
  btnActiveText: "#505050",
  brLine: "#585858",
  warningText: "	#F08080",
  color: { ...color },
};

// styled-components를 기본으로 내보냄
const { default: styled, createGlobalStyle } = styledComponents;
export { styled, createGlobalStyle };
