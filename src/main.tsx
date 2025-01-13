import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './App.css';
import App from './App.tsx';
import { RouterProvider, createHashRouter } from 'react-router-dom'; // Cambiado a createHashRouter
import { LoginMain } from './Components/Login/LoginMain.tsx';
import { RegisterMain } from './Components/Register/RegisterMain.tsx';
import { Start } from './Components/StartApp/Start.tsx';
import { Profile } from './Components/User/Profile.tsx';
import { Details } from './Components/Details/Details.tsx';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Start /> },
        { path: '/login', element: <LoginMain /> },
        { path: '/register', element: <RegisterMain /> },
        { path: '/edit-profile', element: <Profile /> },
        { path: '/details/:id', element: <Details/>}
      ],
    },
  ],
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
