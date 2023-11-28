import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <section className="bg-white ">
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
    </section>
  );
}

export default App;
