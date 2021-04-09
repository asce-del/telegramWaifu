import React from "react";
import Image from "next/image";

interface mainProps {}

export const Main: React.FC<mainProps> = ({}) => {
  return (
    <div>
      <main className="w-full items-center flex mt-20 flex-wrap sm:flex-nowrap mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="w-full sm:w-2/4 sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to my </span>
            <span className="block text-indigo-600 xl:inline">site</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Hello, my name is Vladyslav Yaromiy and im freelancer. That's my
            site-portfolio, where i collect all my projects and introduce myself
            to my potential clients.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                My projects
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                media
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 sm:h-64 md:h-96 flex w-full sm:w-2/4 justify-center">
          <div style={{ marginBlockStart: "auto", paddingRight: 30 }}>
            <Image
              src="/boy.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/girl.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
