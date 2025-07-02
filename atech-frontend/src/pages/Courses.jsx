import React, { useState } from 'react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'web',
      level: 'Beginner',
      duration: '12 weeks',
      price: '$299',
      instructor: 'John Doe',
      image: '/api/placeholder/300/200',
      description: 'Master modern web development with React, Node.js, and MongoDB.'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      category: 'data',
      level: 'Intermediate',
      duration: '10 weeks',
      price: '$399',
      instructor: 'Jane Smith',
      image: '/api/placeholder/300/200',
      description: 'Learn data analysis, machine learning, and visualization with Python.'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'mobile',
      level: 'Intermediate',
      duration: '8 weeks',
      price: '$349',
      instructor: 'Mike Johnson',
      image: '/api/placeholder/300/200',
      description: 'Build cross-platform mobile apps with React Native.'
    },
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      category: 'design',
      level: 'Beginner',
      duration: '6 weeks',
      price: '$199',
      instructor: 'Sarah Wilson',
      image: '/api/placeholder/300/200',
      description: 'Create beautiful and user-friendly interfaces.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of courses designed to help you master the latest technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Course Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="text-lg font-bold text-green-600">{course.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>👨‍🏫 {course.instructor}</span>
                  <span>⏱️ {course.duration}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses; 