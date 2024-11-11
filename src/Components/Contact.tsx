import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div id="Contact" className="bg-zinc-600 min-h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 sm:px-8 lg:px-16 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-serif md:text-6xl mt-10 md:mt-24 text-red-400 font-semibold">
            Contact Me
          </h1>
          <p className="text-sm md:text-base font-mono mt-4">
            Lets Connect
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8 max-w-lg w-full mx-auto mt-10">
          <ul className="space-y-6 text-center w-full">
            <li className="flex flex-col items-center">
              <a
                href="mailto:hasnainmemon0808@gmail.com"
                className="flex items-center space-x-2 text-2xl text-blue-300 hover:text-blue-400 transition-colors"
              >
                <MdMarkEmailUnread />
                <span>Email</span>
              </a>
              <p className="text-sm md:text-base mt-2">
                hasnainmemon0808@gmail.com
              </p>
            </li>

            <li className="flex flex-col items-center">
              <a
                href="https://wa.me/03342197085"
                className="flex items-center space-x-2 text-2xl text-green-500 hover:text-green-600 transition-colors"
              >
                <IoLogoWhatsapp />
                <span>WhatsApp</span>
              </a>
              <p className="text-sm md:text-base mt-2">
                03342197085
              </p>
            </li>

            <li className="flex flex-col items-center">
              <a
                href="https://github.com/hasnainmemon9"
                className="flex items-center space-x-2 text-2xl text-gray-300 hover:text-gray-400 transition-colors"
              >
                <ImGithub />
                <span>GitHub</span>
              </a>
              <p className="text-sm md:text-base mt-2">
                hasnainmemon9
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
