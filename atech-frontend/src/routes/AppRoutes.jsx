import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Footer from '../components/Footer';

// Import pages
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

// Import dashboard components
import StudentOverview from '../dashboards/student/Overview';
import MyCourses from '../dashboards/student/MyCourses';
import InstructorOverview from '../dashboards/instructor/Overview';
import ManageCourses from '../dashboards/instructor/ManageCourses';

const AppRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Student Dashboard Routes */}
          <Route path="/dashboard/student" element={<StudentOverview />} />
          <Route path="/dashboard/student/courses" element={<MyCourses />} />
          
          {/* Instructor Dashboard Routes */}
          <Route path="/dashboard/instructor" element={<InstructorOverview />} />
          <Route path="/dashboard/instructor/courses" element={<ManageCourses />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes; 