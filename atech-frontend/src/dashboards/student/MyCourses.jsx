import React, { useState } from 'react';

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState('enrolled');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Advanced JavaScript',
      instructor: 'John Doe',
      progress: 65,
      status: 'In Progress',
      nextLesson: 'Async/Await Patterns',
      totalLessons: 24,
      completedLessons: 15,
      dueDate: '2024-02-15'
    },
    {
      id: 2,
      title: 'React Mastery',
      instructor: 'Jane Smith',
      progress: 30,
      status: 'In Progress',
      nextLesson: 'State Management',
      totalLessons: 18,
      completedLessons: 5,
      dueDate: '2024-03-01'
    }
  ];

  const completedCourses = [
    {
      id: 3,
      title: 'React Fundamentals',
      instructor: 'Mike Johnson',
      progress: 100,
      status: 'Completed',
      completedDate: '2024-01-15',
      certificate: true,
      rating: 5
    },
    {
      id: 4,
      title: 'HTML & CSS Basics',
      instructor: 'Sarah Wilson',
      progress: 100,
      status: 'Completed',
      completedDate: '2024-01-01',
      certificate: true,
      rating: 4
    }
  ];

  const wishlistCourses = [
    {
      id: 5,
      title: 'Node.js Backend Development',
      instructor: 'Alex Brown',
      price: '$199',
      rating: 4.8,
      students: 1240
    },
    {
      id: 6,
      title: 'Python for Data Science',
      instructor: 'Emily Davis',
      price: '$249',
      rating: 4.9,
      students: 980
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const renderEnrolledCourses = () => (
    <div className="space-y-6">
      {enrolledCourses.map(course => (
        <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">by {course.instructor}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress: {course.completedLessons}/{course.totalLessons} lessons</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-sm text-gray-600">
                <span>📚 Next: {course.nextLesson}</span>
                <span>📅 Due: {course.dueDate}</span>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-2">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Continue Learning
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompletedCourses = () => (
    <div className="space-y-6">
      {completedCourses.map(course => (
        <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <span className="ml-3 text-green-600 text-xl">✅</span>
              </div>
              <p className="text-gray-600 mb-2">by {course.instructor}</p>
              <p className="text-sm text-gray-500 mb-4">Completed on {course.completedDate}</p>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Your Rating:</span>
                  <div className="flex">{renderStars(course.rating)}</div>
                </div>
                {course.certificate && (
                  <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded text-xs">
                    🏆 Certified
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-2">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Download Certificate
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Review Course
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWishlistCourses = () => (
    <div className="space-y-6">
      {wishlistCourses.map(course => (
        <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">by {course.instructor}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="flex mr-2">{renderStars(Math.floor(course.rating))}</div>
                  <span>{course.rating}</span>
                </div>
                <span>👥 {course.students} students</span>
                <span className="text-lg font-bold text-green-600">{course.price}</span>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col space-y-2">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
              <button className="border border-red-300 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors">
                Remove from Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h1>
        
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'enrolled', label: 'Enrolled', count: enrolledCourses.length },
              { id: 'completed', label: 'Completed', count: completedCourses.length },
              { id: 'wishlist', label: 'Wishlist', count: wishlistCourses.length }
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

      {/* Tab Content */}
      <div>
        {activeTab === 'enrolled' && renderEnrolledCourses()}
        {activeTab === 'completed' && renderCompletedCourses()}
        {activeTab === 'wishlist' && renderWishlistCourses()}
      </div>
    </div>
  );
};

export default MyCourses; 