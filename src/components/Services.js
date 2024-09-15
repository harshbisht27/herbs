import React from 'react';

import registrationLogo from './assets/registrationLogo.png';
import chatbotLogo from './assets/chatbotLogo.png';
import dashboardLogo from './assets/dashboardLogo.png';
import insightsLogo from './assets/insightsLogo.png';
import vendorSupportLogo from './assets/vendorSupportLogo.png';
import remediesLogo from './assets/remediesLogo.png';

const VedaServices = () => {
  const services = [
    {
      name: 'Streamlined Registration & Verification',
      description: `Provides a user-friendly registration process with secure document upload, government verification, and real-time status updates.`,
      logo: registrationLogo,  // Add appropriate logo
      
    },
    {
      name: 'Competitive Vendor Support',
      description: `Enables local market players to onboard easily, offering competitive pricing and tools for online presence.`,
      logo: vendorSupportLogo,  // Add appropriate logo
      
    },
    {
      name: 'AI Chatbot Assistance',
      description: `AI Chatbot helps register sellers/customers and provides instant AYUSH remedies and FAQs.`,
      logo: chatbotLogo,  // Add appropriate logo
      
    },
    {
      name: 'Market Scenario Dashboard',
      description: `Provides real-time data from the AYUSH Ministry, helping startups make informed business decisions.`,
      logo: dashboardLogo,  // Add appropriate logo
      
    },
    {
      name: 'Business Insights',
      description: `Offers a dashboard with real-time market insights and compliance data for startups to improve decision-making.`,
      logo: insightsLogo,  // Add appropriate logo
      
    },
    {
      name: 'Ayush Remedies',
      description: `Provides an extensive library of AYUSH remedies to help customers explore traditional medicinal practices.`,
      logo: remediesLogo,  // Add appropriate logo
      
    }
  ];
  

  return (
    <div className="services-container">
      <h1 className='service-heading'>Veda Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <a href={service.wikiLink} target="_blank" rel="noopener noreferrer">
              <img src={service.logo} alt={`${service.name} logo`} />
              <h3>{service.name}</h3>
            </a>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VedaServices;
