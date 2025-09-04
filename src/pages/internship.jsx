const internships = [
  {
    title: "Frontend Web Developer Intern",
    duration: "3 Months",
    location: "Remote",
    description:
      "Work on real-world React and Tailwind CSS projects, collaborate with senior developers, and build your portfolio.",
    apply:
      "mailto:internships@fynally.com?subject=Frontend%20Web%20Developer%20Intern%20Application",
  },
  {
    title: "Data Science Intern",
    duration: "6 Months",
    location: "Hybrid (Delhi)",
    description:
      "Analyze datasets, build machine learning models, and gain hands-on experience with Python and TensorFlow.",
    apply:
      "mailto:internships@fynally.com?subject=Data%20Science%20Intern%20Application",
  },
  {
    title: "DevOps & Cloud Intern",
    duration: "4 Months",
    location: "Remote",
    description:
      "Learn CI/CD, Docker, Kubernetes, and cloud deployment with real company projects.",
    apply:
      "mailto:internships@fynally.com?subject=DevOps%20and%20Cloud%20Intern%20Application",
  },
];

const testimonials = [
  {
    name: "vanshika nayal",
    feedback:
      "The internship gave me real project experience and helped me land my first job! The mentorship was amazing.",
  },
  {
    name: "Sneha Gupta",
    feedback:
      "I learned so much about teamwork and modern web development. Highly recommend to any student!",
  },
];

function InternshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-yellow-800 mb-4 text-center">
        Internship Opportunities
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Kickstart your tech career with hands-on internships! Apply for open
        positions, gain real experience, and grow your network.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {internships.map((intern) => (
          <div
            key={intern.title}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-400 flex flex-col hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold text-yellow-700 mb-1">
              {intern.title}
            </h2>
            <div className="text-gray-600 mb-2">
              {intern.duration} &bull; {intern.location}
            </div>
            <p className="text-gray-700 mb-4">{intern.description}</p>
            <a
              href={intern.apply}
              className="mt-auto inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow text-center"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
      <div className="w-full max-w-4xl bg-yellow-100 rounded-xl p-8 shadow text-center mb-12">
        <h3 className="text-2xl font-bold text-yellow-700 mb-4">
          Why Intern With Us?
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-2 text-left mx-auto max-w-2xl">
          <li>Work on real projects and build your portfolio.</li>
          <li>Mentorship from experienced engineers and data scientists.</li>
          <li>Flexible remote and hybrid opportunities.</li>
          <li>Certificate and letter of recommendation on completion.</li>
        </ul>
      </div>
      <div className="w-full max-w-3xl bg-white rounded-xl p-6 shadow text-center">
        <h3 className="text-xl font-bold text-yellow-700 mb-2">
          What Our Interns Say
        </h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 flex-1 shadow"
            >
              <div className="text-gray-800 font-semibold mb-1">{t.name}</div>
              <div className="text-gray-700 italic">"{t.feedback}"</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InternshipPage;
