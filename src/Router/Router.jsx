import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        }
      ]
    },
  ]);