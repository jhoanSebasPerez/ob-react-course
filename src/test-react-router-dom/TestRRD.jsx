import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import AboutPage from "./AboutPage";
import Contact from "./Contact";
import Home, { loader as projectsLoader } from "./Home";
import ProjectDetail, { loader as projectLoader } from "./ProjectDetail";

const TestRRD = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          index: true,
          element: <Home />,
          loader: projectsLoader,
        },
        {
          path: "/projects/:id",
          element: <ProjectDetail />,
          loader: projectLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default TestRRD;
