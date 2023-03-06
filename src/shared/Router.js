import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/common/LoadingPage";

const DoneList = React.lazy(() => import("../pages/donelist/DoneList"));
const MainPage = React.lazy(() => import("../pages/main/MainPage"));
const TodoList = React.lazy(() => import("../pages/todolist/TodoList"));
const WeekList = React.lazy(() => import("../pages/weeklist/WeekList"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/donlist" element={<DoneList />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/weeklist" element={<WeekList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
