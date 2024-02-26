import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GlobalStyle from './style/GlobalStyle';
import PostIDPage from './pages/PostIDPage/PostIDPage';
import PaperListPage from './pages/PaperListPage/PaperListPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/list" element={<PaperListPage />}></Route>
          <Route path="/postID" element={<PostIDPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
