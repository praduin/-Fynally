import { Handshake, TrendingUp, Hand } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Handshake className="w-10 h-10 text-teal-600" />,
      title: "Guidance",
      desc: "Mentorship, advice, a roadmaps",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-teal-600" />,
      title: "Growth",
      desc: "Learning and career progress",
    },
    {
      icon: <Hand className="w-10 h-10 text-teal-600" />,
      title: "Empowerment",
      desc: "Confidence and tools for success",
    },
  ];

  return (
    <div className=" py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {f.icon}
            <h3 className="text-lg font-bold mt-4">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
