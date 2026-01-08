import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurPrograms from './pages/OurPrograms';
import Impact from './pages/Impact';
import Resources from './pages/Resources';
import OurStudents from './pages/OurStudents';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<OurPrograms />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/students" element={<OurStudents />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}