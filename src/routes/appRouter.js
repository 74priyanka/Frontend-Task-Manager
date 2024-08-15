import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import App from "../App";
import HomeTasks from "../components/HomeTasks";
import AddTasks from "../components/AddTasks/AddTasks";
import Profile from "../components/Profile/Profile";
import CreateNewTask from "../components/CreateNewTask";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeTasks />,
      },
      {
        path: "/createNewTask",
        element: <CreateNewTask />,
      },
      {
        path: "/addTask/:id",
        element: <AddTasks />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
