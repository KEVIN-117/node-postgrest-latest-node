import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <div>Home</div>,
                index: true
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/client",
                element: <div>Client</div>
            },
            {
                path: "/invoices",
                element: <div>Invoices</div>
            },
            {
                path: '/users',
                element: <div>Users</div>
            },
            {
                path: '/register',
                element: <div>Register</div>
            }
        ]
    },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <div className={'dark'}>
          <RouterProvider router={router} />
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
