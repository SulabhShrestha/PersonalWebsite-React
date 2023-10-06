function Projects() {
  return (
    <section className="flex flex-col">
      <h2 className="text-4xl">Projects</h2>

      <div className="group card w-96 md:max-h-64 md:w-full bg-green-500 self-center border flex md:flex-row md:relative ">
        <figure className="md:flex-1">
          <img
            src="/src/assets/dog.jpg"
            alt="Shoes"
            className="group-hover:opacity-40"
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
