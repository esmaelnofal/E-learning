import { useState } from 'react'
import './App.css'
import Nav from './page1/nav.jsx'
import './page1/nav.css'
import MainContent from './page1/mainContent.jsx'
import './page1/mainContent.css'
import './assets/people.png'
import './assets/client1.png'
import './assets/client2.png'
import './assets/client3.png'
import './assets/image4.png'
import './page1/footer.css'
import Footer from './page1/footer.jsx'
import './page1/footer.css'
import PathToSuccess from './page2/pathToSuccess.jsx'
import './page2/pathToSuccess.css'
import FeaturedCourses from './page3/feauturedCourses.jsx'
import './page3/featuredCourses.css'
import InstructorDashBoard from './page4/instructorDashBoard.jsx'
import './page4/instructorDashBoard.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Nav />
      <MainContent />
      <Footer />
      <PathToSuccess />
      <FeaturedCourses />
      <InstructorDashBoard />
      
    </>
  )
}

export default App
