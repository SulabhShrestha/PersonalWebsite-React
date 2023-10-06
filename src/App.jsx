import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-white h-[100vh] ">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;
