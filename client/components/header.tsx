import React, { useState } from "react";
import { Main } from "./main";
interface headerProps {}

export const Header: React.FC<headerProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <h1 className="hidden md:flex p-5 font-bold text-2xl text-indigo-600 cursor-pointer hover:text-indigo-500">Licode.io</h1>
            <div className="hidden md:flex items-center w-full md:space-x-8">
              <div className="flex justify-center w-4/5">
                <a
                  href="#"
                  className="p-5 font-medium text-gray-500  hover:text-gray-900"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="p-5 font-medium text-gray-500 hover:text-gray-900"
                >
                  About me
                </a>

                <a
                  href="#"
                  className="p-5 font-medium text-gray-500 hover:text-gray-900"
                >
                  Hire me
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 flex items-center justify-between">
              <div>
              <h1 className="p-5 font-bold text-2xl text-indigo-600 cursor-pointer hover:text-indigo-500">Licode.io</h1>
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white 
                    rounded-md p-2 inline-flex 
                    items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  {isOpen === false ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {isOpen && (
              <>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Product
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>

                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </a>
              </>
            )}
          </div>
        </div>

       <Main />
      </div>
    </div>
  );
};
