function Footers() {
  return (
    <footer className="w-screen bg-gray-200 border-t py-4 px-4 flex flex-col sm:flex-row items-center justify-between mt-auto">
      <div className="flex items-center mb-2 sm:mb-0">
        <a href="/" className="mr-2" aria-label="Logo">
          <svg
            className="w-8 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect width="100%" height="100%" fill="currentColor" />
          </svg>
        </a>
        <span className="text-gray-700">© 2025 Company, Inc</span>
      </div>
      <ul className="flex gap-4">
        <li>
          <a
            className="text-gray-700 hover:text-gray-900"
            href="#"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="text-gray-700 hover:text-gray-900"
            href="#"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footers;
