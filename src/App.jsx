import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-white h-[100vh] ">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;
