import React, { useState } from 'react';
import Wave from 'react-wavify';

const ServiceCard = ({ title, icon, tags, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl w-full sm:w-72 h-64 p-6 transition-all duration-300 cursor-pointer ${
        isHovered ? 'transform scale-105' : ''
      }`}
      style={{
        backgroundColor: isHovered ? '#f3f4f6' : 'white',
        boxShadow: isHovered ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wavify Animation */}
      <div className={`absolute bottom-0 left-0 w-full h-40 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <Wave 
          fill="#4299e1"
          paused={!isHovered}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.3,
            points: 3
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`mb-4 text-2xl ${isHovered ? 'text-gray-800' : ''}`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-semibold mb-4 ${isHovered ? 'text-gray-800' : 'text-blue-800'}`}>
          {title}
        </h3>

        {/* Description - Only shown when hovered */}
        <p className={`text-sm transition-opacity duration-300 ${
          isHovered ? 'opacity-100 text-gray-800' : 'opacity-0 h-0'
        }`}>
          {description}
        </p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-4 mt-4 ${!isHovered ? 'opacity-100' : 'opacity-0 h-0'}`}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-medium"
              style={{ color }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: 'Annual Maintenance',
      icon: '🔧',
      tags: ['PREVENTIVE', 'SCHEDULED'],
      description: 'Comprehensive annual maintenance services to ensure the optimal performance and longevity of your systems.',
      color: '#8B5CF6'
    },
    {
      title: 'Exchange RO',
      icon: '🔁',
      tags: ['UPGRADE', 'REPLACEMENT'],
      description: 'Seamless exchange and replacement of outdated or malfunctioning components with the latest technology.',
      color: '#F97316'
    },
    {
      title: 'Per-Visit Services',
      icon: '👨‍💻',
      tags: ['TROUBLESHOOTING', 'REPAIR'],
      description: 'On-demand professional services to address any technical issues or requirements on a per-visit basis.',
      color: '#06B6D4'
    }
  ];

  return (
<>
  <div
    className="flex flex-col sm:flex-row gap-8 items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8"
    style={{
      backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-blue-business-atmosphere-business-card-background-image_243064.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
   
    {/* Services Heading */}
    {/* <h1 className="text-4xl font-bold mb-8 sm:mb-12 text-center sm:text-left 
  bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
  bg-clip-text text-transparent 
  shadow-lg shadow-blue-500/50 
  hover:shadow-xl hover:shadow-blue-600/70
  transform hover:scale-105 transition-all duration-300">
  Services
</h1> */}

    {/* Render Service Cards */}
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        icon={service.icon}
        tags={service.tags}
        description={service.description}
      />
    ))}
  </div>
</>

  );
};

export default ServiceCards;