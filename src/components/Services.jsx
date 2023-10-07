function Services() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-4xl">What can I do?</h2>
      <div className="flex gap-2 md:gap-16 justify-center">
        <div className="website max-w-md">
          <h3>Website</h3>
          <p>
            I'm proficient in MERN (MongoDB, Express.js, React, Node.js) web
            development, creating dynamic and responsive websites for your
            online presence.
          </p>
        </div>

        <div className="mobile max-w-md">
          <h3>Mobile App</h3>
          <p>
            I specialize in crafting Android apps, turning your ideas into
            user-friendly, feature-rich applications for the Android platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
