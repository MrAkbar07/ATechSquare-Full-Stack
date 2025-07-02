import React from 'react';

const InstructorOverview = () => {
  const stats = [
    { label: 'Total Students', value: '1,247', icon: '👥', change: '+12%' },
    { label: 'Active Courses', value: '8', icon: '📚', change: '+2' },
    { label: 'Total Revenue', value: '$24,580', icon: '💰', change: '+18%' },
    { label: 'Avg Rating', value: '4.8', icon: '⭐', change: '+0.2' }
  ];

  const recentActivity = [
    {
      type: 'enrollment',
      title: 'New student enrolled in "React Mastery"',
      date: '2 hours ago',
      icon: '👥'
    },
    {
      type: 'review',
      title: 'New 5-star review on "JavaScript Advanced"',
      date: '4 hours ago',
      icon: '⭐'
    },
    {
      type: 'completion',
      title: '15 students completed "Web Development Basics"',
      date: '1 day ago',
      icon: '🎓'
    },
    {
      type: 'question',
      title: 'New Q&A question in "React Hooks Course"',
      date: '2 days ago',
      icon: '❓'
    }
  ];

  const topCourses = [
    {
      title: 'React Mastery',
      students: 342,
      rating: 4.9,
      revenue: '$8,550',
      trend: 'up'
    },
    {
      title: 'JavaScript Advanced',
      students: 289,
      rating: 4.8,
      revenue: '$7,225',
      trend: 'up'
    },
    {
      title: 'Web Development Basics',
      students: 445,
      rating: 4.7,
      revenue: '$6,675',
      trend: 'down'
    },
    {
      title: 'Node.js Backend',
      students: 171,
      rating: 4.6,
      revenue: '$4,275',
      trend: 'up'
    }
  ];

  const pendingTasks = [
    {
      task: 'Review assignment submissions',
      course: 'React Mastery',
      count: 23,
      urgent: true
    },
    {
      task: 'Answer student questions',
      course: 'JavaScript Advanced',
      count: 7,
      urgent: false
    },
    {
      task: 'Update course content',
      course: 'Web Development Basics',
      count: 3,
      urgent: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Instructor!</h1>
        <p className="text-green-100">Manage your courses and engage with your students</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-green-600 text-sm font-medium">{stat.change}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{activity.title}</p>
                  <p className="text-gray-500 text-sm">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Pending Tasks</h2>
          <div className="space-y-4">
            {pendingTasks.map((task, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                task.urgent ? 'border-red-500 bg-red-50' : 'border-blue-500 bg-blue-50'
              }`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">{task.task}</h3>
                    <p className="text-sm text-gray-600">{task.course}</p>
                  </div>
                  <span className={`text-sm font-bold px-2 py-1 rounded ${
                    task.urgent ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {task.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Courses */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Top Performing Courses</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-gray-600 font-medium">Course</th>
                <th className="pb-3 text-gray-600 font-medium">Students</th>
                <th className="pb-3 text-gray-600 font-medium">Rating</th>
                <th className="pb-3 text-gray-600 font-medium">Revenue</th>
                <th className="pb-3 text-gray-600 font-medium">Trend</th>
              </tr>
            </thead>
            <tbody>
              {topCourses.map((course, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 font-medium text-gray-800">{course.title}</td>
                  <td className="py-4 text-gray-600">{course.students}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">⭐</span>
                      <span className="text-gray-600">{course.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 font-semibold text-green-600">{course.revenue}</td>
                  <td className="py-4">
                    <span className={`text-lg ${
                      course.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {course.trend === 'up' ? '↗' : '↘'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">➕</div>
              <p className="font-medium">Create Course</p>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <p className="font-medium">View Analytics</p>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">💬</div>
              <p className="font-medium">Student Messages</p>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">⚙️</div>
              <p className="font-medium">Settings</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorOverview; 