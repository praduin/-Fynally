import { useState } from "preact/hooks";

import Header from "./components/Header.jsx";
import Footers from "./components/Footers.jsx";

import "./app.css";

import Contact from "./pages/Student-Resources.jsx";
import Programs from "./pages/learning.jsx";
import Logo from "./components/Logo.jsx";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Title from "./components/title.jsx";
import InternshipPage from "./pages/internship.jsx";

import Image from "./components/Image.jsx";
import LowerLogo from "./components/LowerLogo.jsx";
import RegisterPage from "./pages/registerpage.jsx";
import ImploymentPage from "./pages/employment.jsx";
import ContactHRPage from "./pages/registerpage.jsx";
import GetStarted from "./pages/getstarted.jsx";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen bg-gray-100 flex flex-col min-h-screen">
      <div className="w-screen mx-auto flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <main className="flex flex-col-reverse lg:flex-row items-center justify-center flex-grow">
                <div>
                  <div className="flex flex-col-reverse lg:flex-row items-center justify-center flex-grow">
                    <Title />
                    <Image />
                  </div>
                  <Logo> </Logo>
                  <LowerLogo />
                </div>
              </main>
            }
          />
          <Route path="/student-resources" element={<Contact />} />
          <Route path="/learning" element={<Programs />} />
          <Route path="/internships" element={<InternshipPage />} />
          <Route path="/employment" element={<ImploymentPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/hr" element={<ContactHRPage />} />
        </Routes>
        <div className="mt-auto w-full">
          <Footers />
        </div>
      </div>
    </div>
  );
}
