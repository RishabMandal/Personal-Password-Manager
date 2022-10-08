import React, { useState, useEffect } from "react";
import ActualPasswordGen from "./ActualPasswordGen";

export default function PasswordGenerator({ username }) {
  // Password generator visibility
  const [generator_visibility, setgenerator_visibility] = useState("hidden");
  useEffect(() => {
    if (
      username == "Rishab" ||
      username == "Krish" ||
      username == "Vivaan" ||
      username == "Arnav"
    ) {
      setgenerator_visibility("");
    }
  }, []);

  return (
    <>
      <div className={`${generator_visibility} mx-4`}>
        {/* <div className=" overflow-auto h-[1000px]"> */}
        <div className=" h-screen overflow-auto" >
          <div>
            <div className="text-center my-5 text-4xl text-white font-bold mx-auto">
              Generate strong and random passwords
            </div>
          </div>
          <div className="text-center my-5 md:mx-60 text-white font-bold mx-auto">
            Upgrade the security of your online accounts - create strong
            passwords that are completely random and impossible to guess. Select
            the length of your new password, choose what symbols to include and
            copy your password easily!
          </div>
          {/* <div class="w-full">
            <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p class="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                facebook
              </p>
              <div class="flex items-end space-x-2 my-6">
                <p class="text-5xl text-black dark:text-white font-bold">
                  xyz@123
                </p>
                <div>
                  <button className="bg-purple-600 text-white rounded-lg px-3 py-2">
                    Copy Password
                  </button>
                </div>
              </div>
              <div class="flex items-end space-x-2 my-6 text-white">
                <div className="block w-full ">Password strength : </div>
                <div className="block w-full ">Password length : </div>
              </div>
            </div>
          </div> */}

          {/* // */}

            <ActualPasswordGen/>

          {/* // */}

          {/* <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
              Create a new account
            </div>
            <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
              Already have an account ?
              <a
                href="#"
                target="_blank"
                class="text-sm text-blue-500 underline hover:text-blue-700"
              >
                Sign in
              </a>
            </span>
            <div class="p-6 mt-8">
              <form action="#">
                <div class="flex flex-col mb-2">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="create-account-pseudo"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="pseudo"
                      placeholder="Pseudo"
                    />
                  </div>
                </div>
                <div class="flex gap-4 mb-2">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="create-account-first-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="First name"
                      placeholder="First name"
                    />
                  </div>
                  <div class=" relative ">
                    <input
                      type="text"
                      id="create-account-last-name"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="Last name"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-2">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="create-account-email"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="flex w-full my-4">
                  <button
                    type="submit"
                    class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Login
                  </button>
                </div>
              </form>
              <div class="flex items-center justify-center mt-6">
                <div>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Blue
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Orange
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Purple
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Black
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Indigo
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Red
                    </span>
                  </label>
                  <label class="flex items-center space-x-3 mb-3">
                    <input
                      type="checkbox"
                      name="checked-demo"
                      class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
                    />
                    <span class="text-gray-700 dark:text-white font-normal">
                      Gray
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div
        className={`${
          generator_visibility == "hidden" ? "" : "hidden"
        } text-white text-3xl`}
      >
        <div className="text-red-600 my-2">Oops !</div>
        This feature is available only for premium members
      </div>
    </>
  );
}
