function Hero() {
  return (
    <section className="flex md:bg-green-400 md:flex-row flex-col items-center px-8">
      <div className="me flex-[2]">
        <h1 className="text-7xl">Hi! I'm Sulabh</h1>
        <p className="leading-loose">The Web and Mobile app developer</p>
      </div>

      <div className="my-img flex-1">
        <img
          src="/src/assets/dog.jpg"
          alt="My image"
          className="rounded-[54%46%67%33%/54%40%60%46%]"
          width="300"
        />
      </div>
    </section>
  );
}

export default Hero;
