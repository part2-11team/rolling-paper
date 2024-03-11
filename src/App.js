import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostMessagePage from './pages/PostMessagePage/PostMessagePage';
import GlobalStyle from './style/GlobalStyle';
import PostPage from './pages/PostPage/PostPage';
import PostIDPage from './pages/PostIDPage/PostIDPage';
import PaperListPage from './pages/PaperListPage/PaperListPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import '../src/style/font.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/list" element={<PaperListPage />}></Route>
          <Route path="/post">
            <Route index element={<PostPage />}></Route>
            <Route path=":userID" element={<PostIDPage />}></Route>
            <Route path=":userID/message" element={<PostMessagePage />} />
          </Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
