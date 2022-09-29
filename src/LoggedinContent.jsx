import React, { useState, useEffect } from "react";
// import LoginForm from "./LoginForm";
// import LoginForm2 from "./LoginForm2";
// import SignUp from "./SignUp";

export default function Login({ username }) {
  //Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // Popover
  const [popover_visibility, setpopover_visibility] = useState("hidden");

  // if Teacher
  const [teacher, setTeacher] = useState("hidden");

  // New Data
  const [eventData, seteventData] = useState([
    // { notice: "Trip-1", date: "15th Oct" },
  ]);

  const [notice2, setnotice2] = useState("");
  const [date2, setdate2] = useState("");

  function setData() {
    seteventData([...eventData, { notice: notice2, date: date2 }]);
    // localStorage.setItem("LOCAL", JSON.stringify(eventData));
  }

  useEffect(() => {
    // setTimeout(() => {
    seteventData(JSON.parse(localStorage.getItem("LOCAL")));
    // }, 1000);
    console.log(JSON.parse(localStorage.getItem("LOCAL")));
  }, []);

  useEffect(() => {
    if (eventData != []) {
      localStorage.setItem("LOCAL", JSON.stringify(eventData));
    }
  }, [eventData]);

  return (
    <>
      <div>
        {/* // NEW SECTION START */}

        {/* // NEW SECTION END */}

        <div>
          <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div class="flex items-start justify-between">
              <div class="h-screen hidden lg:block shadow-lg relative w-80">
                <div class="bg-white h-full dark:bg-gray-700">
                  <div class="flex items-center justify-start pt-6 ml-8">
                    <p class="font-bold dark:text-white text-3xl">Schooly</p>
                  </div>
                  <nav class="mt-6">
                    <div>
                      <a
                        class="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                          </svg>
                        </span>
                        <span class="mx-2 text-sm font-normal">Home</span>
                      </a>
                      <a
                        class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                          </svg>
                        </span>
                        <span class="mx-2 text-sm font-normal">
                          Exam zone
                          <span class="p-1 ml-4 rounded-lg w-4 h-2 bg-gray-200 text-gray-400 text-xs">
                            0
                          </span>
                        </span>
                      </a>
                      <a
                        class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Resources</span>
                      </a>
                      <a
                        class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zm743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zm-236-507q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zm635 507q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zm-266-397q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zm592 561q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z"></path>
                          </svg>
                        </span>
                        <span class="mx-4 text-sm font-normal">Feedback</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="flex flex-col w-full md:space-y-4">
                <header class="w-full h-16 z-40 flex items-center justify-between">
                  <div class="block lg:hidden ml-6">
                    <button class="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                      <svg
                        width="20"
                        height="20"
                        class="text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                    <div class="relative p-1 flex items-center w-full space-x-4 justify-end">
                      <button class="flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md">
                        <svg
                          width="20"
                          height="20"
                          class=""
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path>
                        </svg>
                      </button>
                      <button class="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">
                        <svg
                          width="20"
                          height="20"
                          class="text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
                        </svg>
                      </button>
                      <span class="w-1 h-8 rounded-lg bg-gray-200"></span>
                      {/* <a href="#" class="block relative">
                      <img
                        alt="profil"
                        src="/images/person/1.jpg"
                        class="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a> */}

                      <div class="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            class=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                            id="options-menu"
                            onClick={() => {
                              if (popover_visibility === "") {
                                setpopover_visibility("hidden");
                              } else {
                                setpopover_visibility("");
                              }
                            }}
                          >
                            {username}
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          class={`${popover_visibility} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
                        >
                          <div
                            class="py-1 rounded-xl"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <a
                              href="#"
                              class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <span class="flex flex-col">
                                <span>{username}</span>
                              </span>
                            </a>
                            <a
                              href="#"
                              class="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <span class="flex flex-col">
                                <span
                                  onClick={() => {
                                    window.location.reload(true);
                                  }}
                                >
                                  Logout
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
                  <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
                    Welcome back, {username}
                  </h1>
                  <h2 class="text-md mt-2 text-gray-400">
                    View and Manage your passwords
                  </h2>
                  <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                    <div class="w-full md:w-6/12">
                      <div class="shadow-lg w-full bg-white rounded-xl dark:bg-gray-700 relative overflow-hidden">
                        <a href="#" class="w-full h-full block">
                          <div class="flex items-center bg-purple-600 rounded-xl justify-between px-4 py-6 space-x-4">
                            <div class="flex items-center rounded-xl">
                              <p class="text-xl bg-purple-600 text-gray-700 dark:text-white ml-2 font-semibold">
                                Generate new password
                              </p>
                            </div>
                          </div>
                          {/* <div class="w-full h-3 bg-gray-100">
                                    <div class="w-2/5 h-full text-center text-xs text-white bg-green-400">
                                    </div>
                                </div> */}
                        </a>
                      </div>
                    </div>
                    <div class="flex items-center w-full md:w-1/2 space-x-4">
                      <div class="w-1/2 ">
                        <div class="shadow-lg cursor-pointer bg-orange-500 rounded-xl px-4 py-6 w-full relative">
                          <button class="peer px-5 py-2 bg-orange-500 hover:bg-orange-700 text-white">
                            <p class="text-2xl text-black dark:text-white font-bold">
                              2
                            </p>
                            <p class="text-white text-sm">Safe</p>
                          </button>

                          <div class="hidden rounded-xl peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              DS Assgn.
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Java Assgn.
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Maths Assgn.
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="w-1/2 ">
                        <div class="shadow-lg cursor-pointer bg-orange-500 rounded-xl px-4 py-6 w-full relative">
                          <button class="peer px-5 py-2 bg-orange-500 hover:bg-orange-700 text-white">
                            <p class="text-2xl text-black dark:text-white font-bold">
                              3
                            </p>
                            <p class="text-white text-sm">Compromised</p>
                          </button>

                          <div class="hidden rounded-xl peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Codeissance
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              VCET
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Event 3
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <button class="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2 text-gray-400"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path>
                      </svg>
                      Last month
                      <svg
                        width="20"
                        height="20"
                        class="ml-2 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                      </svg>
                    </button>
                    <span class="text-sm text-gray-400">
                      Today's date : {date}
                    </span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    <div class="w-full">
                      <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                        <p class="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                          Codeissance
                        </p>
                        <div class="flex items-end space-x-2 my-6">
                          <p class="text-5xl text-black dark:text-white font-bold">
                            23 - 24 Sep
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                        <p class="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                          Gandhi Jayanti
                        </p>
                        <div class="flex items-end space-x-2 my-6">
                          <p class="text-5xl text-black dark:text-white font-bold">
                            02 Oct
                          </p>
                        </div>
                      </div>
                    </div>
                    {eventData.map((eventData1) => {
                      return (
                        <>
                          <div class="w-full">
                            <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                              <p class="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                                {eventData1.notice}
                              </p>
                              <div class="flex items-end space-x-2 my-6">
                                <p class="text-5xl text-black dark:text-white font-bold">
                                  {eventData1.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div class="w-full">
                      <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                        <p class="text-xl text-black">
                          <input
                            className="w-11/12 bg-gray-200 rounded-lg p-2"
                            placeholder="Account identifier"
                            type="text"
                            onChange={(event) => {
                              setnotice2(event.target.value);
                            }}
                          />
                        </p>
                        {/* <div class="flex items-end space-x-2 mt-3 mb-6"> */}
                        <p class="text-xl mt-3 mb-6 text-black">
                          <input
                            className="w-11/12 bg-gray-200 rounded-lg p-2"
                            placeholder="Password"
                            type="text"
                            onChange={(event) => {
                              setdate2(event.target.value);
                            }}
                          />
                        </p>
                        {/* </div> */}
                        <button
                          onClick={setData}
                          className="bg-orange-500 hover:bg-orange-100 hover:text-orange-500 rounded-lg px-3 py-2 text-white"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* // OLD SECTION  */}
        {/* <div className="relative mt-28 bg-white w-full h-[585px] overflow-hidden text-left text-[35px] text-black font-inter">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[93px] h-[585px]" />
        <b className="absolute top-[0px] left-[115px] flex items-center w-[361px] h-[95px]">
          Student Dashboard
        </b>
        <b className="absolute top-[263px] left-[115px] text-xl flex items-center w-[361px] h-[95px]">
          Student Details
        </b>
        <div className="absolute top-[95px] left-[calc(50%_-_304px)] bg-brown-100 w-[526px] h-[168px]" />
        <div className="absolute top-[0px] right-[0px] bg-gray-100 w-[176px] h-[585px]" />
        <div className="absolute top-[112px] left-[calc(50%_-_287px)] rounded-lg bg-purple-600 w-[324px] h-[127px]" />
        <div className="absolute text-white px-2 top-[112px] left-[calc(50%_-_287px)] rounded-lg bg-purple-600 w-[324px] h-[127px]">
          <div className="font-semibold">Exam - PT2</div>
        </div>
        <div className="absolute top-[112px] left-[calc(50%_-_-62px)] rounded-lg bg-gray-100 w-[141px] h-[127px]" />
        <div className="absolute top-[361px] left-[calc(50%_-_304px)] rounded-lg w-[526px] h-[178px]" />
        <div className="absolute top-[381px] left-[calc(50%_-_287px)] rounded-lg bg-gray-100 w-[324px] h-[134px]" />
        <div className="absolute top-[381px] left-[calc(50%_-_-62px)] rounded-lg bg-gray-100 w-[141px] h-[134px]" />
      </div> */}
        {/* // OLD SECTION  */}
      </div>
    </>
  );
}
