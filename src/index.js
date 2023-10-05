import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SchedulePage from './pages/SchedulePage';
import DocumentPage from './pages/DocumentPage';
import SelectPage from './pages/SelectPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/schedule',
    element: <SchedulePage />,
  },
  {
    path: '/document',
    element: <DocumentPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/select',
    element: <SelectPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
