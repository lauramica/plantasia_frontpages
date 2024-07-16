import Main from "./pages/Main";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import AboutPageEs from "./pages/AboutPageEs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/ProductList";
import EditUser from "./pages/EditUser";
import OrderList from "./pages/OrderList";
import ProfileView from "./pages/ProfileView";
import OrderPage from "./pages/OrderPage";
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
