import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AITutorPage from "../components/AITutorPage";

export default function Home2({ toggleDarkMode, isDarkMode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full font-sans">
      <div className="flex h-screen overflow-hidden pl-64">
        <Sidebar />
        <AITutorPage
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          onStartExam={() => navigate("/exams")}
        />
      </div>
    </div>
  );
}
