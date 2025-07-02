import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Web Development',
      icon: '🌐',
      description: 'Build responsive, scalable web applications tailored to your business needs.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'API Integration'],
      price: 'Starting at $2,999'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: '📱',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-platform Solutions', 'App Store Deployment', 'Maintenance & Support'],
      price: 'Starting at $4,999'
    },
    {
      id: 3,
      title: 'E-learning Platform Development',
      icon: '🎓',
      description: 'Comprehensive e-learning solutions with advanced features and analytics.',
      features: ['Course Management', 'Student Analytics', 'Payment Integration', 'Content Delivery'],
      price: 'Starting at $7,999'
    },
    {
      id: 4,
      title: 'Technical Consulting',
      icon: '💡',
      description: 'Expert guidance on technology decisions, architecture, and best practices.',
      features: ['Technology Assessment', 'Architecture Design', 'Code Review', 'Performance Audit'],
      price: 'Starting at $150/hour'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Create beautiful, user-friendly interfaces that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'Starting at $1,999'
    },
    {
      id: 6,
      title: 'Digital Marketing',
      icon: '📊',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Strategy', 'Social Media Marketing', 'Content Marketing', 'Analytics & Reporting'],
      price: 'Starting at $999/month'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We understand your requirements and goals through detailed consultation.'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'We create a comprehensive project plan with timelines and milestones.'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Our expert team brings your vision to life with cutting-edge technology.'
    },
    {
      step: 4,
      title: 'Testing',
      description: 'Rigorous testing ensures your solution meets the highest quality standards.'
    },
    {
      step: 5,
      title: 'Delivery',
      description: 'We deploy your solution and provide comprehensive training and support.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive technology solutions and expert services.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">{service.price}</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-purple-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Let's discuss your project and bring your vision to life.</p>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 