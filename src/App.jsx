import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { UpdateFollower } from "react-mouse-follower";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Contact from "./Pages/Contact";
import Navbar2 from "./components/Navbar2";
import SingleProduct from "./components/SingleProduct";
import ProductList from "./components/ProductList";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Home/><Footer/></>,
  },
  {
    path: "/mens",
    element: <><Navbar2/><ProductList category='men'/><Footer/></>,
  },
  {
    path: "/womens",
    element: <><Navbar2/><ProductList category='women'/><Footer/></>,
  },
  {
    path: "/kids",
    element: <><Navbar2/><ProductList category='kid'/><Footer/></>,
  },
  {
    path: "/contact",
    element: <><Navbar2/><Contact/><Footer/></>,
  },
   {
     path: "/products/:productId",
     element: <><Navbar2/><SingleProduct/><Footer/></>,
   },
  // {
  //   path: "/login",
  //   element: <><Navbar/><Login/><Footer/></>,
  // },
  // {
  //   path: "/register",
  //   element: <><Navbar/><Register/><Footer/></>,
  // },
   {
     path: "/cart",
     element: <><Navbar2/><Cart/><Footer/></>,
   },
]);

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
         <RouterProvider router={router} />
      </UpdateFollower>
      
    </main>
  );
};

export default App;
