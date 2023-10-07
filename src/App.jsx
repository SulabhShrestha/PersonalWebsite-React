import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-white h-[100vh] ">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
