import { GraduationCap, BookOpen, Calendar, Building } from "lucide-react";

export default function Journey() {
  const steps = [
    { icon: <GraduationCap className="w-6 h-6" />, label: "Student" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Learner" },
    { icon: <Calendar className="w-6 h-6" />, label: "Intern" },
    { icon: <Building className="w-6 h-6" />, label: "Employee" },
  ];

  return (
    <div className="text-center py-10 px-2">
      <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">
        Your Journey with Fynally
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full max-w-3xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full justify-center"
          >
            <div className="bg-teal-900 text-white p-2 sm:p-3 rounded-full flex items-center justify-center mx-auto">
              {step.icon}
            </div>
            <span className="font-medium text-base sm:text-lg mt-1 sm:mt-0">
              {step.label}
            </span>
            {idx !== steps.length - 1 && (
              <span className="hidden sm:inline text-gray-400 text-2xl">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
