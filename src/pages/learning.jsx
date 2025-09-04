const webDevPath = [
  {
    title: "HTML & CSS Fundamentals",
    description:
      "Start with the building blocks of the web. Learn to structure and style pages.",
    link: "https://www.freecodecamp.org/learn/responsive-web-design/",
  },
  {
    title: "JavaScript Essentials",
    description:
      "Master the language of the web for interactivity and dynamic content.",
    link: "https://javascript.info/",
  },
  {
    title: "React for Beginners",
    description: "Build modern, component-based UIs with React.js.",
    link: "https://react.dev/learn",
  },
  {
    title: "UI/UX Design Basics",
    description:
      "Understand user experience and design beautiful, usable interfaces.",
    link: "https://www.figma.com/resources/learn-design/",
  },
];

const cpPath = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Learn the core concepts for coding interviews and competitions.",
    link: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    title: "Practice on LeetCode",
    description: "Sharpen your skills with real coding problems and contests.",
    link: "https://leetcode.com/",
  },
  {
    title: "Codeforces Contests",
    description: "Participate in regular online programming contests.",
    link: "https://codeforces.com/",
  },
  {
    title: "CP-Algorithms Reference",
    description: "Deep dive into algorithms and problem-solving strategies.",
    link: "https://cp-algorithms.com/",
  },
];

function Learning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-800 mb-4 text-center">
        Learning Paths & Resources
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Choose your path and access the best resources for Web Development and
        Competitive Programming. Start learning, building, and competing today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-indigo-400 flex flex-col">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
            🌐 Web Development Path
          </h2>
          <ul className="space-y-4">
            {webDevPath.map((res) => (
              <li key={res.title}>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-indigo-700 hover:underline"
                >
                  {res.title}
                </a>
                <div className="text-gray-600 text-sm">{res.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-400 flex flex-col">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
            🏆 Competitive Programming Path
          </h2>
          <ul className="space-y-4">
            {cpPath.map((res) => (
              <li key={res.title}>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-purple-700 hover:underline"
                >
                  {res.title}
                </a>
                <div className="text-gray-600 text-sm">{res.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full max-w-3xl bg-indigo-50 rounded-xl p-6 shadow text-center">
        <h3 className="text-xl font-bold text-indigo-700 mb-2">
          Tips for Effective Learning
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1 text-left mx-auto max-w-xl">
          <li>Set clear goals and track your progress.</li>
          <li>Practice by building real projects and solving problems.</li>
          <li>Join online communities and ask for feedback.</li>
          <li>Balance theory with hands-on experience.</li>
        </ul>
      </div>
    </div>
  );
}

export default Learning;
