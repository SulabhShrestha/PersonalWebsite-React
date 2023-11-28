import { useEffect, useRef } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { FaArrowUp } from "react-icons/fa";

function App() {
  console.log("Height: ", window.innerHeight);

  const scrollUpArrow = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // display the scroll component only when the user scrolls down the next page

      if (window.scrollY > 200) {
        scrollUpArrow.current.classList.remove("hidden");
      } else {
        scrollUpArrow.current.classList.add("hidden");
      }
    });
  });

  return (
    <section className="bg-white relative">
      <section className="h-screen flex flex-col">
        <Header />
        <Hero />
      </section>
      <main>
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />

      <div
        ref={scrollUpArrow}
        className="go-up hidden bg-blue-400 w-12 h-12 rounded-full fixed right-8 bottom-8 duration-300 transition-all cursor-pointer hover:bg-blue-500"
      >
        <FaArrowUp className="m-auto h-full" />
      </div>
    </section>
  );
}

export default App;
