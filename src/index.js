import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Blog from './components/Blog';
import Carrer from './components/Carrer';
import Login from './components/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/Blog",
    element:<Blog/>
  },
  {
    path: "/Carrer",
    element: <Carrer/>
  },
  {
    path:"/Login",
    element:<Login/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
