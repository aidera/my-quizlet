import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import Vocabulary from './components/Vocabulary/Vocabulary';
import VocabularyGroup from './components/Vocabulary/VocabularyGroup/VocabularyGroup';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="vocabulary" />}></Route>

        <Route path="vocabulary">
          <Route index element={<Vocabulary />}></Route>
          <Route path=":id" element={<VocabularyGroup />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
