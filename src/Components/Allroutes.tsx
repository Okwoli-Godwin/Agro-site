import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About/About"
import Signup from "./Signup/Signup";
import Homescreen from "./Homescreen/Homescreen";
import Dashboard from "./Dashboard/Dashboard";
import Signin from "./Signin/Signin";
import Contact from "./Contact/Contact"
import Blog from "./Blog/Blog"
import Product from "./Dashboard/Product";
import ProductUpload from "./ProductDashboard/ProductUpload";
import Customerpage from "./Customerdash/Customerpage";
import Order from "./Orderdashboard/Order";


const Allroutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/who we are",
      element: <About />,
    },
    {
      path: "/Dashboard",
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
    },
    {
      path: "productpage",
      children: [
        {
          index: true,
          element: <ProductUpload />
        }
      ]
    },
    {
      path: "Customerpage",
      children: [
        {
          index: true,
          element: <Customerpage/>
        }
      ]
    },
    {
      path: "orderpage",
      children: [
        {
          index: true,
          element: <Order />
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/blog",
      element: <Blog />
    },
  ]);
  return element;
};

export default Allroutes;
