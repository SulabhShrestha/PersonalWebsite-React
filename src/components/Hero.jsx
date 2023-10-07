import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

function Hero() {
  return (
    <div className="md:bg-green-400 h-[70vh] md:h-[80vh] flex justify-center items-center">
      <section
        className="grid md:grid-cols-3 
      relative max-w-4xl justify-center items-center mx-auto gap-10"
      >
        <div className="me md:col-span-2 relative order-2 md:order-1">
          <div className="me text-center md:text-left">
            <h1 className="text-7xl">Hi! I'm Sulabh</h1>
            <p className="leading-loose">The Web and Mobile app developer</p>
          </div>

          <div className="social-links flex gap-4 justify-center md:justify-start">
            <FaGithub className="bg-white text-4xl p-[4px] rounded-full cursor-pointer hover:scale-125 transition-all duration-300 text-blue-500" />
            <FaLinkedin className="bg-white text-4xl p-[4px] rounded-full cursor-pointer hover:scale-125 transition-all duration-300" />
            <FaFacebookF className="bg-white text-4xl p-[4px] rounded-full cursor-pointer hover:scale-125 transition-all duration-300" />
          </div>
        </div>

        <div className="my-img relative md:order-2 order-1">
          <img
            src="/src/assets/dog.jpg"
            alt="My image"
            width="300"
            className="animate-morph border-2 border-blue-500 mx-auto"
          />
        </div>

        <div className="order-3 mt-8">
          <div className="skills flex flex-col justify-center md:flex-row order-3 md:gap-8 gap-4">
            <p className="inline-block w-min border-b-2 md:border-b-0 md:border-r-2 pr-2 text-xl font-bold self-center md:py-2">
              TechStack
            </p>
            <div className="stacks flex gap-4">
              <img
                src="/src/assets/html.png"
                alt="Html"
                className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
              />
              <img
                src="/src/assets/css.png"
                alt="Html"
                className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
              />
              <img
                src="/src/assets/tailwindcss.png"
                alt="Html"
                className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
              />
              <img
                src="/src/assets/js.png"
                alt="Html"
                className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
              />
              <img
                src="/src/assets/react.png"
                alt="Html"
                className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
              />
              <img
                src="/src/assets/node.png"
                alt="Html"
                className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
              />
              <img
                src="/src/assets/flutter.png"
                alt="Html"
                className="w-12 h-12 hover:-translate-y-2 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
