import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AITutorPage from "./components/AITutorPage";
import ExamPage from "./components/ExamPage";
import { RouterProvider } from "react-router";
import { router } from "./router";

export default function App() {
  return <RouterProvider router={router} />;
}
