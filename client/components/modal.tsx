import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

interface modalProps {
  openModal: boolean;
  setOpenModal: (boolean) => void;
}

export const Modal: React.FC<modalProps> = ({ openModal, setOpenModal }) => {
  const [mode, setMode] = useState("LOGIN");

  const handleMode = () => {
    if (mode === "LOGIN") {
      setMode("REGISTER");
    } else if (mode === "REGISTER") {
      setMode("LOGIN");
    }
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden 
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto text-center sm:text-left">
                <h3
                  className="text-lg text-center leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Welcome to my{" "}
                  <span className="text-indigo-600 xl:inline">site</span>
                </h3>
                <div
                  className="absolute sm:top-5 cursor-pointer right-5"
                  onClick={() => setOpenModal(!openModal)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600 hover:text-indigo-900"
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
                </div>
                {mode === "LOGIN" && <Login />}
                {mode === "REGISTER" && <Register />}
                <button
                  onClick={handleMode}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 
              shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-6 sm:w-auto sm:text-sm"
                >
                  {mode === "LOGIN" && "Not signed up?"}
                  {mode === "REGISTER" && "Signed up?"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
