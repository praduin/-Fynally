function ContactHRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-200 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-teal-800 mb-4 text-center">
        Contact HR
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        Have questions about careers, applications, or company policies? Reach
        out to our HR team using the form below or the contact details provided.
      </p>
      <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Your Name
          </label>
          <input
            type="text"
            className="w-full border border-teal-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Your Email
          </label>
          <input
            type="email"
            className="w-full border border-teal-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Message
          </label>
          <textarea
            className="w-full border border-teal-200 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="How can we help you?"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors mt-2"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 w-full max-w-md bg-teal-100 rounded-xl p-6 shadow text-center">
        <h2 className="text-lg font-bold text-teal-700 mb-2">
          HR Contact Information
        </h2>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:careers@fynally.com"
            className="text-teal-600 hover:underline"
          >
            praduin sharma
          </a>
        </p>
        <p className="text-gray-700">
          Phone:{" "}
          <a href="tel:+1234567890" className="text-teal-600 hover:underline">
            +91 8865989153
          </a>
        </p>
        <p className="text-gray-700">
          Office: 123 Tech Avenue, Innovation City, 12345
        </p>
      </div>
    </div>
  );
}

export default ContactHRPage;
