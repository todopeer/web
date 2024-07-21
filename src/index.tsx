import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/landing';
import reportWebVitals from './reportWebVitals';
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import TodoApp from './pages/todoapp';
import { ErrorPage } from './pages/error';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <LandingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: '/app',
      element: <TodoApp />,
      children: [
        {
          path: '/app/1',
          element: <div>the todo App outlet</div>
        },
      ]
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
