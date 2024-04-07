import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import GetCategory from '../components/GetCategory';
import CreateCategory from '../components/CreateCategory/CreateCategory';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "category",
        element: <GetCategory />
      },
      {
        path: "category/new",
        element: <CreateCategory />
      }
    ],
  },
]);