function Services() {
  return (
    <section className=" md:mx-auto mt-20 max-w-4xl" id="Services">
      <h2 className="text-4xl mb-4 border-b-2 border-b-blue-600 text-blue-600 font-medium w-max mx-auto md:mx-0 md:text-left">
        What can I do?
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-2 md:gap-16 md:mx-0 mx-4">
        <div className="website bg-appLightBlue rounded-xl px-6 py-4">
          <h3 className="card-title">Website</h3>
          <p className="pt-2">
            I'm proficient in MERN (MongoDB, Express.js, React, Node.js) web
            development, creating dynamic and responsive websites for your
            online presence.
          </p>
        </div>

        <div className="mobile bg-appLightBlue rounded-xl px-6 py-4">
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
