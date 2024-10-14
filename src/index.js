import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
//styles
import GlobalStyle from "./styles/GlobalStyles";
import ThemeProvider from "./context/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </React.StrictMode>
);
