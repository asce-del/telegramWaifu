import React, { useState } from "react";

interface footerProps {}

export const Footer: React.FC<footerProps> = ({}) => {
  return (
    <div className="w-full flex justify-between sm:flex-row flex-col mb-20 mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:w-3/5 w-full sm:border-r-4 sm:border-indigo-600">
        <h3 className="font-bold sm:text-3xl text-2xl sm:text-left text-center text-indigo-600 cursor-pointer hover:text-indigo-500">
          Technologies, i used to create this site:
        </h3>
        <ul className="list-disc sm:ml-14 p-8 sm:text-left text-center mt-4 md:text-l sm:text-lg text-gray-500 ">
          <li>Next.js</li>
          <li>Tailwindcss</li>
          <li>GraphlQL</li>
          <li>Node.js\Express</li>
          <li>TypeScript</li>
          <li>Prisma.io</li>
          <li>MySQL</li>
        </ul>
        <p className="flex mt-7 font-bold text-xl text-indigo-600 sm:justify-start justify-center cursor-pointer hover:text-indigo-900">
          Find out more...
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" ml-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </p>
      </div>
      <div className="sm:w-2/5 w-full p-8">
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-l lg:mx-0">
          Resourceful and dedicated student with excellent analytical skills and
          a demonstrated commitment to providing great customer service.
          Well-rounded and professional team player dedicated to continuing
          academic pursuits at a collegiate level.
        </p>
        <button className="float-right mt-20 bg-indigo-600 hover:bg-indigo-500 font-bold py-2 px-4 text-white rounded-full">
          Contact me
        </button>
      </div>
    </div>
  );
};
