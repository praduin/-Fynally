const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up with your email to access all features and track your progress.",
    icon: "👤",
  },
  {
    title: "Choose a Program",
    description:
      "Browse our courses and programs to find what fits your goals.",
    icon: "📚",
  },
  {
    title: "Start Learning",
    description:
      "Access interactive lessons, resources, and community support.",
    icon: "🚀",
  },
  {
    title: "Connect & Grow",
    description:
      "Join events, ask questions, and network with peers and mentors.",
    icon: "🤝",
  },
];

function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-200 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-4 text-center">
        Get Started with FYNALLY
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Ready to boost your skills and join a vibrant tech community? Follow
        these simple steps to get started!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-l-4 border-purple-400 hover:scale-105 transition-transform"
          >
            <div className="text-4xl mb-3">{step.icon}</div>
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              Step {idx + 1}: {step.title}
            </h2>
            <p className="text-gray-700 text-center">{step.description}</p>
          </div>
        ))}
      </div>
      <a
        href="/register"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-colors text-lg"
      >
        Create Your Free Account
      </a>
    </div>
  );
}

export default GetStarted;
