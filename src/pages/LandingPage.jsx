import { useNavigate } from "react-router-dom";
import Nav from "../page1/nav";
import MainContent from "../page1/mainContent";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import "./LandingPage.css";
import PathToSuccess from "../page2/pathToSuccess";
import FeaturedCourses from "../page3/feauturedCourses";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/dashboard");

  return (
    <div className="landing-page-wrapper">
      <Nav onLogin={handleLogin} onGetStarted={handleLogin} />
      <MainContent onGetStarted={handleLogin} />
      <CallToAction />
      <PathToSuccess />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
