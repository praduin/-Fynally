import { useNavigate } from "react-router-dom";
function Title() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-center items-start max-w-2xl px-2 lg:px-8 mt-6">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-extrabold leading-tight text-left">
        Your Life Companion –<br />
        From Student to Professional
      </h1>
      <p className="text-left text-lg text-gray-700 mt-4 max-w-lg">
        Fynally is here to guide you every step of the way
      </p>
      <button
        onClick={() => {
          navigate("/get-started");
        }}
        className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold text-base shadow transition-colors"
      >
        Start Your Journey
      </button>
    </div>
  );
}
export default Title;
