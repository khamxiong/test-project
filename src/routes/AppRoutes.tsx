import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Blogs from "../pages/Blogs"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const AppRoutes = () => {
  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={
            <Home />
        } />
        <Route path="/about" element={
            <About />
        } />
        <Route path="/blogs" element={
            <Blogs />
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes