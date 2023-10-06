import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Going to send");

    emailjs
      .sendForm(
        "service_uos4bvn",
        "template_kmdvvig",
        formRef.current,
        "YFxIfVifT9jgXJVFd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex gap-4 md:flex-row flex-col px-8">
      <div className="declaration flex-1">
        <h2>Hire me</h2>
        <p>
          If you have a project in mind, I'd love to hear about it. Feel free to
          contact me.
        </p>
      </div>

      <div className="contact flex-[2]">
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Full Name *"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email *"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <textarea
            name="user_desc"
            id=""
            cols="30"
            rows="3"
            placeholder="Description *"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-green-500 px-6 py-2 rounded-lg text-white font-bold hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
