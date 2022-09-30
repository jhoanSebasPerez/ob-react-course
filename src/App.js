import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AppContext";
import Layout from "./components/containers/Layout";
import HomePage from "./pages/home/HomePage";
import LoginFormik from "./components/pures/forms/LoginFormik";
import RegisterForm from "./components/pures/forms/RegisterForm";
import RequireAuth from "./components/pures/RequireAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginFormik />,
        },
        {
          path: "/register",
          element: <RegisterForm />,
        },
        // ? protected routes, first should login
        {
          path: "/dashboard",
          element: (
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          ),
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
