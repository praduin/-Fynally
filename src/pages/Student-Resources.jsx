const webDesignResources = [
  {
    title: "FreeCodeCamp Web Design Course",
    description: "Comprehensive beginner-to-advanced web design tutorials.",
    link: "https://www.freecodecamp.org/learn/responsive-web-design/",
  },
  {
    title: "CSS Tricks",
    description:
      "Tips, guides, and inspiration for modern CSS and web layouts.",
    link: "https://css-tricks.com/",
  },
  {
    title: "Figma Community",
    description:
      "Free UI kits, templates, and design inspiration for Figma users.",
    link: "https://www.figma.com/community",
  },
  {
    title: "Google Fonts",
    description:
      "A huge library of free, open-source fonts for your web projects.",
    link: "https://fonts.google.com/",
  },
];

const cpResources = [
  {
    title: "LeetCode",
    description:
      "Practice coding problems and prepare for technical interviews.",
    link: "https://leetcode.com/",
  },
  {
    title: "Codeforces",
    description: "Competitive programming contests and a vast problem archive.",
    link: "https://codeforces.com/",
  },
  {
    title: "GeeksforGeeks DSA",
    description: "Data Structures and Algorithms tutorials and practice sets.",
    link: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    title: "CP-Algorithms",
    description:
      "In-depth explanations of algorithms and data structures for CP.",
    link: "https://cp-algorithms.com/",
  },
];

function StudentResources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
        Student Resources
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Explore top resources to boost your skills in web design and competitive
        programming. Curated for students who want to learn, build, and win!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-cyan-400 flex flex-col">
          <h2 className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
            🌐 Web Design Resources
          </h2>
          <ul className="space-y-4">
            {webDesignResources.map((res) => (
              <li key={res.title} className="">
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-cyan-700 hover:underline"
                >
                  {res.title}
                </a>
                <div className="text-gray-600 text-sm">{res.description}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-400 flex flex-col">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
            🏆 Competitive Programming
          </h2>
          <ul className="space-y-4">
            {cpResources.map((res) => (
              <li key={res.title} className="">
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-700 hover:underline"
                >
                  {res.title}
                </a>
                <div className="text-gray-600 text-sm">{res.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full max-w-3xl bg-blue-50 rounded-xl p-6 shadow text-center">
        <h3 className="text-xl font-bold text-blue-700 mb-2">
          Tips for Success
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1 text-left mx-auto max-w-xl">
          <li>
            Practice regularly and build real projects to reinforce your
            learning.
          </li>
          <li>
            Join online communities and participate in contests or hackathons.
          </li>
          <li>
            Read documentation and source code to deepen your understanding.
          </li>
          <li>Don't hesitate to ask questions and seek mentorship.</li>
        </ul>
      </div>
    </div>
  );
}

export default StudentResources;
