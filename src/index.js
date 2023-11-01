import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TeamSpace from './pages/Teamspace';
import SchedulePage from './pages/SchedulePage';
import DocumentPage from './pages/DocumentPage';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/teamspace',
    element: <TeamSpace />,
    children: [
      {
        path: '/teamspace/main',
        element: <MainPage />,
      },
      {
        path: '/teamspace/schedule',
        element: <SchedulePage />,
      },
      {
        path: '/teamspace/document',
        element: <DocumentPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
