import { createBrowserRouter } from "react-router";
import Home2 from "./pages/Home2";
import Home from "./pages/Home";
import Exams from "./pages/Exams";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home2 />,
  },
  { path: "/exams", element: <Exams /> },
]);
