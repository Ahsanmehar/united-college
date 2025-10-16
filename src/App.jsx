import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollUp from "./components/ScrollUp";
import CoursesPage from "./pages/CoursesPage";
import FacultyDetail from "./pages/CoursesDetailPage/FacultyDetail";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course-detail/:id" element={<BlogDetailPage />} />
        <Route path="/faculty/:id" element={<FacultyDetail />} />
        <Route
          path="/faculty/:facultyId/school/:schoolId"
          element={<FacultyDetail />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-detail/:id" element={<BlogDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <ScrollUp />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
