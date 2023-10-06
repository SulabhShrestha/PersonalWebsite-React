function Contact() {
  return (
    <section className="flex gap-4 md:flex-row flex-col">
      <div className="declaration flex-1">
        <h2>Hire me</h2>
        <p>
          If you have a project in mind, I'd love to hear about it. Feel free to
          contact me.
        </p>
      </div>

      <div className="contact flex-[2]">
        <form action="">
          <input
            type="text"
            name="fullName"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Full Name *"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="3"
            placeholder="Description *"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </form>

        <input
          type="submit"
          value="Send"
          className="bg-green-500 px-6 py-2 rounded-lg text-white font-bold hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer"
        />
      </div>
    </section>
  );
}

export default Contact;
