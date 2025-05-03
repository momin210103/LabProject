import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-16 px-6 bg-white text-gray-800 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About This Application</h2>
      <p className="text-lg">
        This Single Page Application (SPA) is built using the MERN Stack (MongoDB, Express.js, React.js, Node.js)
        and AJAX. It showcases a dynamic list of Bangladeshi business companies similar to the Forbes Billionaires list.
        Admins can manage the data in real time.
      </p>
    </div>
  );
};

export default AboutSection;
