import React from 'react';

function WhyChoose() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Why Choose Us Section */}
      <section className="flex justify-center items-center bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Why Choose Our IT Solutions?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            We are committed to delivering innovative and tailored IT solutions that empower businesses to achieve their goals.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="p-6 bg-blue-950 shadow-md rounded-lg hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white">Expert Team</h3>
              <p className="mt-2 text-white text-sm sm:text-base">
                Our team comprises experienced professionals with deep industry knowledge.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-blue-950 shadow-md rounded-lg hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white">Customized Solutions</h3>
              <p className="mt-2 text-white text-sm sm:text-base">
                We understand your unique needs and craft solutions tailored to your business.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-blue-950 shadow-md rounded-lg hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white">Cutting-Edge Technology</h3>
              <p className="mt-2 text-white text-sm sm:text-base">
                We leverage the latest technologies to deliver high-quality results.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-blue-950 shadow-md rounded-lg hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white">Reliable Support</h3>
              <p className="mt-2 text-white text-sm sm:text-base">
                Our team provides reliable support to ensure smooth operations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-blue-950 shadow-md rounded-lg hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white">Proven Track Record</h3>
              <p className="mt-2 text-white text-sm sm:text-base">
                We've helped numerous clients achieve their business goals.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-blue-950 shadow-md rounded-lg hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white">Cost-Effective</h3>
              <p className="mt-2 text-white text-sm sm:text-base">
                We deliver quality solutions at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChoose;
