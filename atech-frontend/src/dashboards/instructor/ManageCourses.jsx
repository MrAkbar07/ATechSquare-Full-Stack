import React, { useState } from 'react';

const ManageCourses = () => {
  const [activeTab, setActiveTab] = useState('published');
  const [searchTerm, setSearchTerm] = useState('');

  const publishedCourses = [
    {
      id: 1,
      title: 'React Mastery',
      status: 'Published',
      students: 342,
      rating: 4.9,
      revenue: '$8,550',
      lastUpdated: '2024-01-15',
      lessons: 24,
      duration: '18h 30m'
    },
    {
      id: 2,
      title: 'JavaScript Advanced',
      status: 'Published',
      students: 289,
      rating: 4.8,
      revenue: '$7,225',
      lastUpdated: '2024-01-10',
      lessons: 32,
      duration: '22h 15m'
    },
    {
      id: 3,
      title: 'Web Development Basics',
      status: 'Published',
      students: 445,
      rating: 4.7,
      revenue: '$6,675',
      lastUpdated: '2024-01-05',
      lessons: 18,
      duration: '14h 45m'
    }
  ];

  const draftCourses = [
    {
      id: 4,
      title: 'Advanced React Patterns',
      status: 'Draft',
      progress: 75,
      lessons: 20,
      completedLessons: 15,
      lastUpdated: '2024-01-20'
    },
    {
      id: 5,
      title: 'TypeScript Fundamentals',
      status: 'Draft',
      progress: 40,
      lessons: 16,
      completedLessons: 6,
      lastUpdated: '2024-01-18'
    }
  ];

  const pendingCourses = [
    {
      id: 6,
      title: 'GraphQL with React',
      status: 'Under Review',
      submittedDate: '2024-01-22',
      reviewNotes: 'Awaiting final content review'
    }
  ];

  const CourseCard = ({ course }) => {
    if (course.status === 'Published') {
      return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>👥 {course.students} students</span>
                <span>📚 {course.lessons} lessons</span>
                <span>⏱️ {course.duration}</span>
              </div>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {course.status}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <span className="text-yellow-400 mr-1">⭐</span>
                <span className="font-semibold">{course.rating}</span>
              </div>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-green-600">{course.revenue}</p>
              <p className="text-xs text-gray-500">Revenue</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{course.lastUpdated}</p>
              <p className="text-xs text-gray-500">Last Updated</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Edit Course
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              View Analytics
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              ⋮
            </button>
          </div>
        </div>
      );
    }

    if (course.status === 'Draft') {
      return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>📚 {course.completedLessons}/{course.lessons} lessons</span>
                <span>📅 {course.lastUpdated}</span>
              </div>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              {course.status}
            </span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Course Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Continue Editing
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              Preview
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              ⋮
            </button>
          </div>
        </div>
      );
    }

    if (course.status === 'Under Review') {
      return (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>📅 Submitted: {course.submittedDate}</span>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {course.status}
            </span>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600">{course.reviewNotes}</p>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              View Submission
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              ⋮
            </button>
          </div>
        </div>
      );
    }
  };

  const filteredCourses = (courses) => {
    return courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Manage Courses</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Create New Course
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'published', label: 'Published', count: publishedCourses.length },
              { id: 'drafts', label: 'Drafts', count: draftCourses.length },
              { id: 'pending', label: 'Pending Review', count: pendingCourses.length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'published' && 
          filteredCourses(publishedCourses).map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        }
        {activeTab === 'drafts' && 
          filteredCourses(draftCourses).map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        }
        {activeTab === 'pending' && 
          filteredCourses(pendingCourses).map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        }
      </div>

      {/* Empty State */}
      {((activeTab === 'published' && filteredCourses(publishedCourses).length === 0) ||
        (activeTab === 'drafts' && filteredCourses(draftCourses).length === 0) ||
        (activeTab === 'pending' && filteredCourses(pendingCourses).length === 0)) && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No courses found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm ? 'Try adjusting your search criteria' : 'Start creating your first course'}
          </p>
          {!searchTerm && (
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Create Your First Course
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageCourses; 