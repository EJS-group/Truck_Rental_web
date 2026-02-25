import "../src/dist/styles.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Loader from "./components/Loader";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadingPaths = [
      "/",
      "/about",
      "/contact",
      "/models",
      "/testimonials",
      "/team",
    ];

    if (!loadingPaths.includes(location.pathname)) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 800); // show loader briefly on these pages

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<Models />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
}

export default App;
