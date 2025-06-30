import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/", 
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "recipes", element: <Recipes /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
