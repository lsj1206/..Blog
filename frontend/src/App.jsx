import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
//Pages
import ListPage from "./pages/ListPage";
import ReadPage from "./pages/ReadPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import InfomationPage from "./pages/InfomationPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/posts/detail/:postId" element={<ReadPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/info" element={<InfomationPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
