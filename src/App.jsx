import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Exams from "./pages/Exams";
import PathToSuccess from "./page2/pathToSuccess";
import FeaturedCourses from "./page3/feauturedCourses";
import InstructorDashboard from "./page4/instructorDashBoard";
import FatamaPage from "./pages/FatamaPage";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/home"
            element={
              <Home2 isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/exams"
            element={
              <Exams isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route path="/success" element={<PathToSuccess />} />
          <Route path="/courses" element={<FeaturedCourses />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/fatama" element={<FatamaPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
