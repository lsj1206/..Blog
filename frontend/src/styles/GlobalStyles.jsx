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
    font-family: 'Arial', sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;
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
