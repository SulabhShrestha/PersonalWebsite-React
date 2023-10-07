function Services() {
  return (
    <section className="max-w-4xl mx-auto mt-20">
      <h2 className="text-4xl mb-4 border-b-2 w-max mx-auto">What can I do?</h2>
      <div className="flex flex-col items-center md:flex-row gap-2 md:gap-16 ">
        <div className="website max-w-md bg-green-500 rounded-xl px-6 py-4 ">
          <h3 className="card-title">Website</h3>
          <p className="pt-2">
            I'm proficient in MERN (MongoDB, Express.js, React, Node.js) web
            development, creating dynamic and responsive websites for your
            online presence.
          </p>
        </div>

        <div className="mobile max-w-md bg-green-500 rounded-xl px-6 py-4">
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
