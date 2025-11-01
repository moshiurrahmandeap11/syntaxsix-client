import { createBrowserRouter } from "react-router"; 
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/AboutUs/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        { index: true, element: <Home></Home> },
        { path: "/about-us", element: <AboutUs></AboutUs>}
    ]
  },
]);

export default routes;
