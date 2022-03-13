import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import Training from './components/Training/Training';
import Vocabulary from './components/Vocabulary/Vocabulary';
import VocabularyGroup from './components/Vocabulary/VocabularyGroup/VocabularyGroup';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="vocabulary" />}></Route>

        <Route path="vocabulary">
          <Route index element={<Vocabulary />}></Route>
          <Route path=":id">
            <Route index element={<VocabularyGroup />}></Route>
            <Route path="training">
              <Route index element={<Training />}></Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
