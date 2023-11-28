import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

function Projects() {
  return (
    <section className="flex flex-col max-w-4xl mx-auto" id="Projects">
      <h2 className="text-4xl mx-auto md:mx-0 md:text-left border-b-2 border-b-blue-600 w-min mb-4 mt-12 font-medium text-blue-600">
        Projects
      </h2>

      {/* Card */}
      <div className="rounded-xl md:max-h-72 md:w-full bg-appYellow flex flex-col self-center md:flex-row z-0 mx-4">
        <figure className="md:flex-1 inline-block">
          <img
            src="/public/assets/mood-tracker.png"
            alt="Shoes"
            className="md:flex object-cover p-4 h-full w-full rounded-3xl "
          />
        </figure>
        <div className="card-body md:flex-1">
          <h2 className="card-title text-2xl">Mood Tracker</h2>
          <p className="text-gray-800 text-[15px]">
            Effortlessly record daily moods and uncover emotional patterns over
            time. With a clean interface and improved performance, this project
            offers a seamless journey into self-discovery through emotion
            tracking.
          </p>
          <p className="mt-4 mb-2">
            <span className="font-bold">Tech used:</span> Flutter, Firebase
          </p>

          <div className="links flex gap-4 justify-center md:justify-start">
            <button className="bg-green-50 rounded px-4 py-2  hover:bg-appLightBlue transition-colors duration-200">
              <a
                href="https://github.com/SulabhShrestha/MoodTracker"
                target="_blank"
                className="flex flex-row items-center gap-2"
              >
                Code <FaGithub size={20} />
              </a>
            </button>

            <button className="bg-green-50 rounded px-4 py-2  hover:bg-appLightBlue transition-colors duration-200">
              <a
                href="https://play.google.com/store/apps/details?id=com.sulabhstha.mood_tracker"
                className="flex flex-row items-center gap-2"
                target="_blank"
              >
                View <AiOutlineLink size={20} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
