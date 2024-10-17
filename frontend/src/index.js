import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//styles
import GlobalStyle from "./styles/GlobalStyles";
import ThemeProvider from "./context/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
