import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
    </FirebaseProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
