import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TeamSpace from './pages/Teamspace';
import SchedulePage from './pages/SchedulePage';
import DocumentPage from './pages/DocumentPage';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import { Select } from './components/Select';
import { Login } from './components/Login';
import { CreateTeam } from './components/CreateTeam';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: '/select',
        element: <Select />,
      },
      {
        path: '/select/:lectureId',
        element: <CreateTeam />,
      },
    ],
  },
  {
    path: '/teamspace',
    element: <TeamSpace />,
    children: [
      {
        path: '/teamspace/main/:teamId',
        element: <MainPage />,
      },
      {
        path: '/teamspace/schedule/:teamId',
        element: <SchedulePage />,
      },
      {
        path: '/teamspace/document/:teamId',
        element: <DocumentPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
