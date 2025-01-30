import React, { useState } from "react";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      image: "https://acclaim.agency/wp-content/uploads/2022/04/4548450-1044x696.jpg",
      id: "web-development",
      title: "Web Development",
      description: "Build responsive and modern websites tailored to your needs.",
      details:
        "Our web development services include building responsive, SEO-friendly, and modern websites using the latest technologies like React, Angular, and Vue.js. We ensure performance optimization and scalability for your business needs.",
    },
    {
      image: "https://www.businessofapps.com/wp-content/uploads/2020/08/zymr8_steps_the_mobile_app_dev_lifecycle_cover.jpg",
      id: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Create user-friendly mobile applications for iOS and Android.",
      details:
        "We design and develop mobile applications for both Android and iOS platforms. Our expertise includes native app development with Swift and Kotlin, as well as cross-platform solutions using Flutter and React Native.",
    },
    {
      image: "https://gradmalaysia.com/sites/default/files/2023-07/Digital_Marketing-01.png",
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Enhance your online presence and boost your brand visibility.",
      details:
        "Our digital marketing services include SEO, social media marketing, email campaigns, and PPC advertising. We help you increase your online visibility and attract more customers.",
    },
  ];

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId === selectedService ? null : serviceId); // Toggle the detail view
  };
 
  return (
    <div className="bg-gray-50  lg:pt-20 pt-18 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-[45px] font-extrabold text-black lg:mb-6 mb-2">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 lg:mb-12 mb-8 max-w-2xl mx-auto">
          Click on a service to learn more about what we offer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-2">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-2xl transform transition-all hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">
                <img
                  className="h-[30vh] w-[100%] object-cover rounded-lg"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Details Section */}
        {selectedService && (
          <div className="mt-12 bg-white shadow-md rounded-xl p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {
                services.find((service) => service.id === selectedService).title
              }
            </h2>
            <p className="text-gray-600">
              {
                services.find((service) => service.id === selectedService)
                  .details
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;