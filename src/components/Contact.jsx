const Contact = () => (
  <section className="py-20 mb-20 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-800">Get in Touch</h2>

    <form className="max-w-lg mx-auto space-y-5 bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
      <input
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
        placeholder="Your Name"
      />
      <input
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
        placeholder="Your Email"
      />
      <textarea
        rows="3"
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
        placeholder="Your Message"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
