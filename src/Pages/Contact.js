import React from 'react'
import Header from '../Componants/Header'
import Footer from '../Componants/Footer'

function Contact() {
  return (
    <div>
        <Header></Header>
        <section id="contact" class="py-16 px-8">
    <h2 class="text-3xl font-bold text-center text-blue-900 mb-12 pt-16">Contact Us</h2>

    {/* <!-- Contact Information Section --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      {/* <!-- Left Column: Contact Details --> */}
      <div class="bg-white border-black border-[1px] p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Contact Information</h3>
        <p class="text-lg text-gray-600 mb-6">
          We're here to help! Please find our contact details below:
        </p>
        <ul class="text-gray-700">
          <li class="mb-4">
            <strong>Phone:</strong> <a href="tel:+1234567890" class="text-blue-600 hover:underline">9303715744</a>
          </li>
          <li class="mb-4">
            <strong>Email:</strong> <a href="info@codexfutureTechnologies.com" class="text-blue-600 hover:underline">info@codexfutureTechnologies.com</a>
          </li>
          <li class="mb-4">
            <strong>Address:</strong> 3rd floor Shagun arcade , Vijay Nagar Indore
          </li>
        </ul>
      </div>

      {/* <!-- Right Column: Google Map --> */}
      <div class="bg-white border-black border-[1px] p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-blue-900 mb-4">Our Location</h3>
        <p class="text-lg text-gray-600 mb-6">
          Visit us at our office location. You can also reach us via the contact details mentioned.
        </p>
        {/* <!-- Embed Google Map --> */}
        <iframe class="w-full h-64 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57579.32121792141!2d75.83535991953124!3d22.721934332145743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd5bf5f442f%3A0x9935eaddd6fd3a23!2sShagun%20arcade%20Vijay%20Nagar!5e1!3m2!1sen!2sus!4v1737465571686!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>

    

    {/* <!-- Contact Form Section --> */}
    <div class="max-w-4xl mx-auto bg-white  border-black border-[1px] p-8 rounded-lg shadow-lg">
      <h3 class="text-2xl font-semibold text-blue-900 mb-4">Send Us a Message</h3>
      <p class="text-lg text-gray-600 mb-6">Have any questions or need support? Feel free to send us a message!</p>

      {/* <!-- Contact Form --> */}
      <form action="https://formspree.io/f/mrbbnwbe" method="POST">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* <!-- Name Field --> */}
          <div>
            <label for="name" class="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
            <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          </div>

          {/* <!-- Email Field --> */}
          <div>
            <label for="email" class="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
            <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          </div>
        </div>

        {/* <!-- Message Field --> */}
        <div class="mb-6">
          <label for="message" class="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
          <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        {/* <!-- Submit Button --> */}
        <div class="text-center">
          <button type="submit" class="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
  <Footer></Footer>
    </div>
  )
}

export default Contact