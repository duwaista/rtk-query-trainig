import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/Home';
import PostsPage from "../pages/Posts";

const AppRoutes = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
