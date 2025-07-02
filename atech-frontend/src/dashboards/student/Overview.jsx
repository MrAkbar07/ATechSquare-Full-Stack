import React from 'react';

const StudentOverview = () => {
  const stats = [
    { label: 'Enrolled Courses', value: '4', icon: '📚' },
    { label: 'Completed', value: '2', icon: '✅' },
    { label: 'In Progress', value: '2', icon: '⏳' },
    { label: 'Certificates', value: '2', icon: '🏆' }
  ];

  const recentActivity = [
    {
      type: 'completion',
      title: 'Completed "React Fundamentals"',
      date: '2 days ago',
      icon: '✅'
    },
    {
      type: 'enrollment',
      title: 'Enrolled in "Advanced JavaScript"',
      date: '1 week ago',
      icon: '📚'
    },
    {
      type: 'certificate',
      title: 'Earned Web Development Certificate',
      date: '2 weeks ago',
      icon: '🏆'
    }
  ];

  const upcomingDeadlines = [
    {
      title: 'JavaScript Project Submission',
      course: 'Advanced JavaScript',
      date: '3 days left',
      urgent: true
    },
    {
      title: 'React Quiz',
      course: 'React Mastery',
      date: '1 week left',
      urgent: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Student!</h1>
        <p className="text-blue-100">Continue your learning journey with ATechSquare</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
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

        {/* Upcoming Deadlines */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                deadline.urgent ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'
              }`}>
                <h3 className="font-medium text-gray-800">{deadline.title}</h3>
                <p className="text-sm text-gray-600">{deadline.course}</p>
                <p className={`text-sm font-medium ${
                  deadline.urgent ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {deadline.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">📚</div>
              <p className="font-medium">Browse Courses</p>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <p className="font-medium">View Progress</p>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <p className="font-medium">My Certificates</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview; 