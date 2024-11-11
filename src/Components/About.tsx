import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="bg-sky-400 w-full py-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 flex-col md:flex-row items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
            <Image
              className="object-cover object-center rounded"
              alt="about image"
              width={400}
              height={400}
              src={"/about.jpeg"}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font font-serif sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed font-mono text-base sm:text-lg">
              As a dedicated student in the Governor Sindh Initiative for Cloud Applied Generative AI, I am passionate about exploring the transformative power of cloud computing and generative AI. This unique program has equipped me with hands-on experience in advanced AI techniques, cloud infrastructure, and practical applications of generative models, positioning me to contribute meaningfully to the evolving field of artificial intelligence.
            </p>
            <div className="flex justify-center">
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
