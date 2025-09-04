const jobs = [
  {
    title: "Junior Frontend Developer",
    type: "Full-Time",
    location: "Remote / Delhi",
    description:
      "Work with React and Tailwind CSS to build modern web apps. Great for recent graduates!",
    apply:
      "mailto:careers@fynally.com?subject=Application%20for%20Junior%20Frontend%20Developer",
  },
  {
    title: "Data Analyst",
    type: "Full-Time",
    location: "Remote",
    description:
      "Analyze data, create dashboards, and support business decisions. Python/Excel skills required.",
    apply:
      "mailto:careers@fynally.com?subject=Application%20for%20Data%20Analyst",
  },
  {
    title: "Campus Ambassador",
    type: "Part-Time",
    location: "Your College Campus",
    description:
      "Promote FYNALLY programs, organize events, and build your leadership skills.",
    apply:
      "mailto:careers@fynally.com?subject=Application%20for%20Campus%20Ambassador",
  },
];

function EmploymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">
        Career Opportunities
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Join our team and make an impact! Explore open positions, apply, and
        start your career journey with FYNALLY.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-400 flex flex-col hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-1">
              {job.title}
            </h2>
            <div className="text-gray-600 mb-2">
              {job.type} &bull; {job.location}
            </div>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <a
              href={job.apply}
              className="mt-auto inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow text-center"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
      <div className="w-full max-w-4xl bg-green-100 rounded-xl p-8 shadow text-center mb-12">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Why Work With Us?
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-2 text-left mx-auto max-w-2xl">
          <li>Innovative projects and a collaborative team culture.</li>
          <li>Remote and flexible work options.</li>
          <li>Mentorship and career growth opportunities.</li>
          <li>Competitive salary and benefits.</li>
        </ul>
      </div>
      <div className="w-full max-w-3xl bg-white rounded-xl p-6 shadow text-center">
        <h3 className="text-xl font-bold text-green-700 mb-2">
          Career Support
        </h3>
        <p className="text-gray-700 mb-2">
          Need help with your application or want to know more about our hiring
          process?
        </p>
        <Link
          href="/hr"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow"
        >
          Contact HR
        </Link>
      </div>
    </div>
  );
}

export default EmploymentPage;
