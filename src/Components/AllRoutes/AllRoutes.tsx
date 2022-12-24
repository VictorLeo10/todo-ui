import React from "react";
import LandingScreen from "../LandingScreen";
import { useRoutes } from "react-router-dom";
import TodoList from "../TodoList";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingScreen />,
    },
    {
      path: "/todo",
      element: <TodoList />,
    },
  ]);
  return element;
};

export default AllRoutes;
