function Services() {
  return (
    <section className="max-w-4xl md:mx-auto mt-20 mx-4">
      <h2 className="text-4xl mb-4 border-b-2 border-b-black font-medium w-max mx-auto md:mx-0 md:text-left">
        What can I do?
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-2 md:gap-16 ">
        <div className="website max-w-md bg-appLightBlue rounded-xl px-6 py-4 ">
          <h3 className="card-title">Website</h3>
          <p className="pt-2">
            I'm proficient in MERN (MongoDB, Express.js, React, Node.js) web
            development, creating dynamic and responsive websites for your
            online presence.
          </p>
        </div>

        <div className="mobile max-w-md bg-appLightBlue rounded-xl px-6 py-4">
          <h3 className="card-title">Mobile App</h3>
          <p className="pt-2">
            I specialize in crafting Android apps, turning your ideas into
            user-friendly, feature-rich applications for the Android platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
