function Registered() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col items-center py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center max-w-lg w-full">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12l2 2l4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1 className="text-3xl font-bold text-green-800 mb-2 text-center">
          Registration Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Thank you for joining FYNALLY. Your account has been created and you
          can now access all our courses, programs, and community features.
        </p>
        <a
          href="/home"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
        >
          Go to home
        </a>
      </div>
    </div>
  );
}

export default Registered;
