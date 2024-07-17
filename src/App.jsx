import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EditUser from "./pages/EditUser";
import CheckOut from "./pages/CheckOut";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import OrderList from "./pages/OrderList";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";
import AboutPageEs from "./pages/AboutPageEs";
import ProductList from "./pages/ProductList";
import ProfileView from "./pages/ProfileView";
import PasswordReset from "./pages/PasswordReset";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about-this-project/en",
          element: <AboutPage />,
        },
        {
          path: "about-this-project/es",
          element: <AboutPageEs />,
        },
        {
          path: "product/:id",
          element: <ProductPage />,
        },
        {
          path: "products",
          element: <ProductList />,
        },
        {
          path: "products/:category",
          element: <ProductList />,
        },
        {
          path: "cart",
          element: <CheckOut />,
        },
        {
          path: "edit-user",
          element: <EditUser />,
        },
        {
          path: "orders",
          element: <OrderList />,
        },
        {
          path: "profile",
          element: <ProfileView />,
        },
        {
          path: "order/:id",
          element: <OrderPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/reset-password",
      element: <PasswordReset />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
