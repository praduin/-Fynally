import hero from "../assets/hero.png";
function Image() {
  return (
    <div className="flex-1 hidden lg:flex justify-center items-center">
      <img
        src={hero}
        className="w-64 h-64 xl:w-96 xl:h-96 object-contain"
        alt="Hero Banner"
      />
    </div>
  );
}
export default Image;
