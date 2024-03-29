import React, { useState, useEffect, createContext } from "react";
import PasswordGenerator from "./PasswordGenerator";
import logo from "../assets/Logo1.png";
import logovideo from "../assets/logo2.mp4";
import { motion } from "framer-motion";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { db } from "../firebase";
import {
  // addDoc,
  // collection,
  // getDocs,
  doc,
  updateDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import Dashboard from "./Dashboard";
import { NavLink } from "react-router-dom/dist";
import Feedback from "./Feedback";
import { encrypt } from "n-krypta";
import Labs from "./Labs";
// import VoiceAssistant from "./VoiceAssistant";
import Error from "./Error";
import HoverVideoPlayer from "react-hover-video-player";
import PasswordFromImage from "./PasswordFromImage";

export default function Login({ username }) {
  // Encrypt
  const secretKey = "PersonalPass";

  // Popover
  const [popover_visibility, setpopover_visibility] = useState("hidden");

  // New Data
  // const [eventData, seteventData] = useState([
  //   // { notice: "Trip-1", date: "15th Oct" },
  // ]);
  const [eventData, seteventData] = useState();

  const [notice2, setnotice2] = useState("");
  const [date2, setdate2] = useState("");

  function setData() {
    if (notice2 === "" || date2 === "") {
      return;
    }
    const encryptData = encrypt(date2, secretKey);
    seteventData([...eventData, { notice: notice2, date: encryptData }]);
    // seteventData([...eventData, { notice: notice2, date: date2 }]);
    // localStorage.setItem("LOCAL", JSON.stringify(eventData));
  }

  // let a = JSON.parse(localStorage.getItem("LOCAL")) || [];
  // useEffect(() => {
  //   seteventData(a);
  //   // console.log(JSON.parse(localStorage.getItem("LOCAL")));
  // }, []);

  useEffect(() => {
    if (eventData) {
      if (eventData.length !== 0) {
        localStorage.setItem("LOCAL", JSON.stringify(eventData));
      }
    }
  }, [eventData]);

  // Premium
  const [premium, setpremium] = useState("GET PREMIUM");
  useEffect(() => {
    if (
      username === "Rishab" ||
      username === "360 Rishab" ||
      username === "Rishab Mandal" ||
      username === "Krish" ||
      username === "MP R" ||
      username === "Vivaan" ||
      username === "Arnav"
    ) {
      setpremium("PREMIUM");
    }
  }, []);

  // Delete passwords
  const removeTodo = (index) => {
    const newTodos = [...eventData];
    newTodos.splice(index, 1);
    seteventData(newTodos);
  };

  // Sidebar
  const [open, setOpen] = useState(false);

  // Firebase

  async function Add() {
    if (username && eventData) {
      const docRef = await setDoc(doc(db, `Account`, `${username}`), {
        eventData: eventData,
      });
    }
  }

  // Read from db
  useEffect(() => {
    // if (eventData.length === 0) {
    // Add();
    // }
    see();
  }, []);

  async function see() {
    const querySnapshot = await getDoc(doc(db, `Account`, `${username}`));
    if (!doc.exists) {
      Add();
    }
    seteventData(querySnapshot.data().eventData);
  }

  useEffect(() => {
    if (eventData !== [] && eventData) {
      update();
    }
  }, [eventData]);

  // Update db
  async function update() {
    await updateDoc(doc(db, `Account`, `${username}`), {
      eventData: eventData,
    });
  }

  // Password facts state
  const [facts, setFacts] = useState(false);

  // Lockdown mode state
  const [lockdown, setLockdown] = useState(true);

  //
  const data = window.localStorage.getItem("Lockdown");
  useEffect(() => {
    if (data !== null) setLockdown(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Lockdown", JSON.stringify(lockdown));
  }, [lockdown]);

  const data2 = window.localStorage.getItem("Facts");
  useEffect(() => {
    if (data2 !== null) setFacts(JSON.parse(data2));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Facts", JSON.stringify(facts));
  }, [facts]);

  const UserContext = createContext();

  return (
    <>
      <div>
        <Router>
          <div>
            <main className="bg-gray-800 h-screen overflow-hidden relative">
              <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block shadow-lg relative w-80">
                  <div className="h-full bg-gray-700">
                    <div className="flex items-center justify-start pt-6">
                      {/* <img
                        src={logo}
                        className="rounded-lg w-48 mx-auto"
                        alt=""
                      /> */}
                      <HoverVideoPlayer
                        className="rounded-lg w-48 mx-auto object-cover"
                        // videoSrc="../assets/logo.mp4"
                        videoSrc={logovideo}
                        pausedOverlay={
                          <img
                            src={logo}
                            alt=""
                            style={{
                              // Make the image expand to cover the video's dimensions
                              // width: "100%",
                              // height: "100%",
                              // objectFit: "cover",
                            }}
                            className="object-contain w-full rounded-lg"
                          />
                        }
                        hoverOverlay={
                          <div className="hover-overlay">
                          </div>
                        }
                      />
                    </div>
                    <div className="mt-6">
                      <div>
                        <NavLink
                          to="/"
                          // className="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                          className={({ isActive }) =>
                            "w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start " +
                            (isActive ? "border-l-4 border-purple-500" : "")
                          }
                        >
                          <span className="text-left">
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
                          <span
                            onClick={() => {
                              navigator.vibrate(50);
                            }}
                            className="mx-2 text-sm font-normal"
                          >
                            Dashboard
                          </span>
                        </NavLink>
                        <NavLink
                          to="/generator"
                          // className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                          className={({ isActive }) =>
                            "w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start " +
                            (isActive ? "border-l-4 border-purple-500" : "")
                          }
                        >
                          <span className="text-left">
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
                          <span
                            className="mx-2 text-sm font-normal"
                            onClick={() => {
                              navigator.vibrate(50);
                            }}
                          >
                            Password Generator
                          </span>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            "w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start " +
                            (isActive ? "border-l-4 border-purple-500" : "")
                          }
                          to="/labs"
                        >
                          <span className="text-left">
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
                          <span className="mx-2 text-sm font-normal">Labs</span>
                        </NavLink>
                        <NavLink
                          className={({ isActive }) =>
                            "w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start " +
                            (isActive ? "border-l-4 border-purple-500" : "")
                          }
                          to="/feedback"
                        >
                          <span className="text-left">
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
                          <span className="mx-2 text-sm font-normal">
                            Feedback (BETA)
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full md:space-y-4">
                  <header className="w-full h-16 z-40 flex items-center justify-between">
                    <div className="block lg:hidden ml-6">
                      <button
                        onClick={() => setOpen(!open)}
                        className="flex p-2 mt-4 items-center rounded-full bg-white shadow text-gray-500 text-md"
                      >
                        <svg
                          width="20"
                          height="20"
                          className="text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                      <div className="relative p-1 flex items-center w-full space-x-3 justify-end">
                        <motion.button
                          whileHover={{ rotate: 40 }}
                          className="p-2 hidden sm:flex items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md"
                        >
                          <svg
                            width="20"
                            height="20"
                            className="text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
                          </svg>
                        </motion.button>
                        <button className="flex transition ease-in py-2 px-3 items-center font-bold rounded-lg bg-green-600 shadow text-white hover:text-green-800 text-md">
                          {premium}
                        </button>
                        {/* <a href="#" className="block relative">
                      <img
                        alt="profil"
                        src="/images/person/1.jpg"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a> */}

                        <div className="relative inline-block text-left">
                          <div>
                            <button
                              type="button"
                              className=" border transition ease-in border-gray-300 bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                              id="options-menu"
                              onClick={() => {
                                navigator.vibrate(50);
                                if (popover_visibility === "") {
                                  setpopover_visibility("hidden");
                                } else {
                                  setpopover_visibility("");
                                }
                              }}
                            >
                              {username}
                              <motion.svg
                                // whileHover={{ scale: 1.1 }}
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 1792 1792"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                              </motion.svg>
                            </button>
                          </div>
                          <div
                            className={`${popover_visibility} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5`}
                          >
                            <div
                              className="py-1 rounded-xl"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <div
                                className="block px-4 py-2 text-md hover:bg-gray-100 hover:text-gray-900 text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                              >
                                <span className="flex flex-col">
                                  <span>{username}</span>
                                </span>
                              </div>
                              <div
                                className="block px-4 py-2 text-md hover:bg-gray-100 hover:text-gray-900 text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                              >
                                <span className="flex flex-col">
                                  <span
                                    onClick={() => {
                                      localStorage.removeItem("username");
                                      window.location.reload(true);
                                    }}
                                  >
                                    Logout
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  {/* Sidebar */}

                  <div className={`lg:hidden xl:hidden 2xl:hidden`}>
                    {/* // */}
                    <div className="flex ml-[-250px]">
                      <div
                        className={` ${
                          open ? "translate-x-full" : "translate-x-0"
                        } flex flex-col fixed z-10 h-screen p-3 bg-gray-800 shadow duration-300`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">
                              Dashboard
                            </h2>
                            <button
                              onClick={() => {
                                navigator.vibrate(50);
                                setOpen(!open);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4 6h16M4 12h8m-8 6h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="relative">
                            {/* <span className="absolute inset-y-0 left-0 flex items-center py-4">
                              <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  />
                                </svg>
                              </button>
                            </span>
                            <input
                              type="search"
                              name="Search"
                              placeholder="Search..."
                              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                            /> */}
                          </div>
                          <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                              <li className="rounded-sm">
                                <Link
                                  to="/"
                                  onClick={() => {
                                    navigator.vibrate(50);
                                  }}
                                  className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                  </svg>
                                  <span className="text-gray-100">Home</span>
                                </Link>
                              </li>
                              <li className="rounded-sm">
                                <NavLink
                                  to="/generator"
                                  onClick={() => {
                                    navigator.vibrate(50);
                                  }}
                                  className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    />
                                  </svg>
                                  <span className="text-gray-100">
                                    Password Generator (BETA)
                                  </span>
                                </NavLink>
                              </li>
                              <li className="rounded-sm">
                                <NavLink
                                  to="/labs"
                                  onClick={() => {
                                    navigator.vibrate(50);
                                  }}
                                  className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                  </svg>
                                  <span className="text-gray-100">Labs</span>
                                </NavLink>
                              </li>
                              <li className="rounded-sm">
                                <NavLink
                                  to="/feedback"
                                  onClick={() => {
                                    navigator.vibrate(50);
                                  }}
                                  className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                  </svg>
                                  <span className="text-gray-100">
                                    Feedback
                                  </span>
                                </NavLink>
                              </li>
                              <li className="rounded-sm">
                                <div
                                  onClick={() => {
                                    navigator.vibrate(50);
                                    localStorage.removeItem("username");
                                    window.location.reload(true);
                                  }}
                                  className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                  </svg>
                                  <span className="text-gray-100">Logout</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* // */}
                  </div>

                  {/*  */}

                  <Routes>
                    {/* // Dashboard */}
                    <Route
                      path="/"
                      element={
                        <Dashboard
                          username={username}
                          eventData={eventData}
                          seteventData={seteventData}
                          removeTodo={removeTodo}
                          setnotice2={setnotice2}
                          date2={date2}
                          setdate2={setdate2}
                          setData={setData}
                          secretKey={secretKey}
                          facts={facts}
                          lockdown={lockdown}
                          setLockdown={setLockdown}
                          premium={premium}
                        />
                      }
                    />
                    {/* // Password Generator */}
                    <Route
                      path="/generator"
                      element={<PasswordGenerator premium={premium} />}
                    />
                    {/* // Labs  */}
                    <Route
                      path="/labs"
                      element={
                        <Labs
                          premium={premium}
                          facts={facts}
                          setFacts={setFacts}
                          lockdown={lockdown}
                          setLockdown={setLockdown}
                          // UserContext={UserContext}
                        />
                      }
                    />
                    {/* // Feedback  */}
                    <Route
                      path="/feedback"
                      element={<Feedback premium={premium} />}
                    />
                    <Route
                      path="/passwordimage"
                      element={<PasswordFromImage />}
                    />
                    <Route path="*" element={<Error />} />
                  </Routes>
                </div>

                {/* // Voice assistant  */}
                {/* {premium === "PREMIUM" && (
                  <VoiceAssistant
                    UserContext={UserContext}
                    username={username}
                    facts={facts}
                    setFacts={setFacts}
                    lockdown={lockdown}
                    setLockdown={setLockdown}
                    eventData={eventData}
                    seteventData={seteventData}
                  />
                )} */}
              </div>
            </main>
          </div>
        </Router>
      </div>
    </>
  );
}
