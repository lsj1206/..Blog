import { createGlobalStyle } from "./Theme";

/* Global 스타일 정의 */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};
    font-family: 'D2Coding-Ver1.3.2', sans-serif;
    line-height: 1.5;
    transition: all 0.3s ease-in-out;
  }

  ul, ol {
    list-style: none;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
