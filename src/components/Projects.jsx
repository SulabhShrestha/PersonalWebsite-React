function Projects() {
  return (
    <section className="flex flex-col max-w-4xl mx-auto">
      <h2 className="text-4xl mx-auto md:mx-0 md:text-left border-b-2 w-min mb-4 mt-12">
        Projects
      </h2>

      <div className="rounded-xl w-96 md:max-h-64 md:w-full bg-green-500 flex flex-col self-center md:flex-row group md:relative z-0">
        <figure className="md:flex-1 inline-block">
          <img
            src="/src/assets/dog.jpg"
            alt="Shoes"
            className="md:flex group-hover:opacity-40 object-cover p-4 h-full w-full rounded-3xl"
          />
        </figure>
        <div className="card-body md:flex-1 group-hover:opacity-5">
          <h2 className="card-title">Mood Tracker</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>Tech used: Flutter, Firebase</p>
        </div>

        <button className="bg-green-50 rounded py-2 w-48 md:absolute md:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 md:hidden group-hover:block self-center mb-4">
          View
        </button>
      </div>
    </section>
  );
}

export default Projects;
