import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <div>
      <nav className=" px-2 sm:px-4 py-2.5  bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="/weather-app.png"
              className="h-6 mr-3 sm:h-9"
              alt="Weather Twin"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Weather Report
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-300 md:p-0 text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Search"
                  className="block py-2 pl-3 pr-4 rounded  md:hover:bg-transparent md:border-0  md:p-0 text-gray-300 md:hover:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
