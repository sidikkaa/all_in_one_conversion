import React from 'react';

interface Service {
  title: string;
  description: string;
}

const Services: React.FC = () => {
  // Array of services
  const services: Service[] = [
    {
      title: "Document Conversion",
      description: "Effortlessly convert documents between different formats such as Word to PDF, PDF to Word, Excel to PDF, and more."
    },
    {
      title: "File Compression",
      description: "Reduce file sizes without compromising quality. Optimize storage and enhance sharing capabilities."
    }
    // Add more services as needed
  ];

  return (
    <section className="py-12 bg-gray-200 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600">
          Explore our wide range of services designed to meet your needs.
        </p>
        {/* Additional service points */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
