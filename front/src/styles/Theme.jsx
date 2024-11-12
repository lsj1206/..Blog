import * as styledComponents from "styled-components";

const shared = {
  tooltip: "#5F5F5F",
  tooltipText: "#F0F8FF",
};

export const light = {
  brLine: "#585858",
  bgMain: "white",
  bgMainSub: "#FCFCFC",
  bgLayout: "#E8E8E8",
  bgSub: "#C3C3C3",
  btn: "#A9A9A9",
  btnActive: "#585858",
  text: "black",
  bgText: "#AAAAAA",
  btnText: "#696969",
  btnActiveText: "#C0C0C0",
  highlightText: "#4682B4",
  warningText: "#8B0000",
  shared: { ...shared },
};

export const dark = {
  brLine: "#585858",
  bgMain: "#282828",
  bgMainSub: "#252525",
  bgLayout: "#383838",
  bgSub: "#606060",
  btn: "#505050",
  btnActive: "#909090",
  text: "white",
  bgText: "#808080",
  btnText: "#808080",
  btnActiveText: "#505050",
  highlightText: "#87CEEB",
  warningText: "	#F08080",
  shared: { ...shared },
};

// styled-components를 기본으로 내보냄
const { default: styled, createGlobalStyle } = styledComponents;
export { styled, createGlobalStyle };
