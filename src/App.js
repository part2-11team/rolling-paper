import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GlobalStyle from './style/GlobalStyle';
import PaperListPage from './pages/PaperListPage';
import PostPage from './pages/PostPage';
import PostIDPage from './pages/PostIDPage/PostIDPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/list" element={<PaperListPage />}></Route>
          <Route path="/post" element={<PostPage />}></Route>
          <Route path="/postID" element={<PostIDPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
