import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formRef.current[0].value ||
      !formRef.current[1].value ||
      !formRef.current[2].value
    ) {
      Swal.fire("Please enter all fields.").then((val) => {
        if (!formRef.current[0].value) {
          formRef.current[0].classList.add("border-red-500", "border-[1px]");
        }
        if (!formRef.current[1].value) {
          formRef.current[1].classList.add("border-red-500", "border-[1px]");
        }
        if (!formRef.current[2].value) {
          formRef.current[2].classList.add("border-red-500", "border-[1px]");
        }
      });
    } else {
      emailjs
        .sendForm(
          "service_uos4bvn",
          "template_kmdvvig",
          formRef.current,
          "YFxIfVifT9jgXJVFd"
        )
        .then(
          (result) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Message sent successfully",
              showConfirmButton: false,
              timer: 1000,
            });
          },
          (error) => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Error sending message",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        );
    }
  };

  const removeError = (e) => {
    e.target.classList.remove("border-red-500", "border-[1px]");
  };

  return (
    <section className="flex gap-4 md:flex-row flex-col mx-auto mt-20 mb-8 md:mb-20 max-w-4xl">
      <div className="declaration flex-1 text-center">
        <h2 className="text-4xl mb-4 border-b-2 w-max md:mx-0 md:text-left">
          Hire me
        </h2>
        <p className="md:text-left">
          If you have a project in mind, I'd love to hear about it. Feel free to
          contact me.
        </p>
      </div>

      <div className="contact flex-[2]">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-2"
        >
          <input
            type="text"
            name="user_name"
            id="price"
            onFocus={removeError}
            className="block w-full  rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-300"
            placeholder="Full Name *"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email *"
            onFocus={removeError}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <textarea
            name="user_desc"
            id=""
            cols="30"
            rows="3"
            placeholder="Description *"
            onFocus={removeError}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-green-500 px-6 py-2 rounded-lg text-white font-bold hover:bg-green-600 transition duration-300 ease-in-out cursor-pointer flex-none w-min self-center"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
