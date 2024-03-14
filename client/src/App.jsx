import "./App.css";
import HomePage from "./pages/Home";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <HomePage /> : <Navigate to={"/signin"} />,
    },
    {
      path: "/signin",
      element: authUser ? <Navigate to="/" /> : <SignInPage />,
    },
    {
      path: "/signup",
      element: authUser ? <Navigate to="/" /> : <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
