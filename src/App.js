import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GlobalStyle from './style/GlobalStyle';
import PostIDPage from './pages/PostIDPage/PostIDPage';
import React from 'react';
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
          <Route path="/post">
            <Route path=":userID" element={<PostIDPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
