import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CourseCatalogPage from "./pages/CourseCatalogPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import LecturePlayerPage from "./pages/LecturePlayerPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import StudentsPage from "./pages/StudentsPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import FinalQuizPage from "./pages/FinalQuizPage";
import NotificationPage from "./pages/NotificationPage";
import CertificatePage from "./pages/CertificatePage";
import SupportTicketPage from "./pages/SupportTicketPage";
import ProgressAnalyticsPage from "./pages/ProgressAnalyticsPage";



function App() {
  return (
    <>



    
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/courses" element={<CourseCatalogPage />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/learn/:courseId/:lectureId" element={<LecturePlayerPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />

        <Route path="/students" element={<StudentsPage />} />

        <Route path="/students/:id" element={<StudentDetailPage />} />
        <Route path="/courses/:courseId/final-quiz" element={<FinalQuizPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/certificate/:courseId" element={<CertificatePage />} />
        <Route path="/support" element={<SupportTicketPage />} />
        <Route path="/progress" element={<ProgressAnalyticsPage />} />
        
      </Routes>
    </>
  );
}

export default App;