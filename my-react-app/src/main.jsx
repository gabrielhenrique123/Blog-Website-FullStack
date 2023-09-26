import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./app/pages/Login/Login.jsx";
import App from "./app/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
