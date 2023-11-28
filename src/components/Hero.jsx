import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex-grow flex justify-center">
      <div className=" flex justify-center items-center">
        <section
          className="grid md:grid-cols-3 
      relative max-w-4xl justify-center items-center mx-auto gap-10"
        >
          <div className="me md:col-span-2 relative order-2 md:order-1">
            <div className="rounded-[30%70%62%38%/40%59%41%60%] w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-green-300 to-green-50 absolute top-2 left-5"></div>
            <div className="rounded-[30%70%62%38%/40%59%41%60%] w-12 h-12 md:hidden bg-gradient-to-r from-green-300 to-green-50 absolute right-5 bottom-2 "></div>
            <div className="me text-center md:text-left relative mb-4">
              <h1 className="text-7xl">
                Hi! I'm <span className="text-blue-600">Sulabh</span>{" "}
              </h1>
              <p className="leading-loose">The Web and Mobile app developer</p>
            </div>

            <div className="social-links flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/SulabhShrestha">
                <FaGithub className="bg-white text-4xl p-[4px] cursor-pointer hover:scale-125 transition-all duration-300 hover:text-blue-500" />
              </a>

              <a href="https://www.linkedin.com/in/sulabh-shrestha-39bb421a5/">
                <FaLinkedin className="bg-white text-4xl p-[4px] cursor-pointer hover:scale-125 transition-all duration-300 hover:text-blue-500" />
              </a>

              <a href="https://www.facebook.com/sulabh.shrestha.50">
                <FaFacebookF className="bg-white text-4xl p-[4px] cursor-pointer hover:scale-125 transition-all duration-300 hover:text-blue-500" />
              </a>
            </div>
          </div>

          <div className="my-img relative md:order-2 order-1">
            <img
              src="/public/assets/dog.jpg"
              alt="My image"
              width="300"
              className="animate-morph border-2 border-blue-500 mx-auto"
            />
          </div>

          <div className="order-3 mt-8">
            <div className="skills flex flex-col md:flex-row order-3 md:gap-8 gap-4">
              <p className="inline-block w-min border-b-4 md:border-b-0 md:border-r-4 pr-2 text-xl font-bold self-center md:py-2">
                TechStack
              </p>
              <div className="stacks flex gap-4 md:flex-nowrap flex-wrap justify-center md:justify-normal">
                <img
                  src="/public/assets/html.png"
                  alt="Html"
                  className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
                />
                <img
                  src="/public/assets/css.png"
                  alt="CSS"
                  className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
                />
                <img
                  src="/public/assets/tailwindcss.png"
                  alt="Tailwindcss"
                  className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
                />
                <img
                  src="/public/assets/js.png"
                  alt="Javascript"
                  className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
                />
                <img
                  src="/public/assets/react.png"
                  alt="React"
                  className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
                />
                <img
                  src="/public/assets/node.png"
                  alt="NodeJS"
                  className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
                />
                <img
                  src="/public/assets/flutter.png"
                  alt="Flutter"
                  className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
