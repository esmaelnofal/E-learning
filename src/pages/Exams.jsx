import { useNavigate } from "react-router-dom";
import ExamPage from "../components/ExamPage";

export default function Exams({ toggleDarkMode, isDarkMode }) {
  const navigate = useNavigate();

  return (
    <ExamPage
      toggleDarkMode={toggleDarkMode}
      isDarkMode={isDarkMode}
      onBack={() => navigate("/home")}
    />
  );
}
