import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layouts/Layout";
//Pages
import ListPage from "./pages/ListPage";
import ReadPage from "./pages/ReadPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/post/:id" element={<ReadPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
