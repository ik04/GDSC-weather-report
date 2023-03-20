import Navbar from "@/components/Navbar"
import WeatherCard from "@/components/WeatherCard"
import { GlobalContext } from "@/context/GlobalContext"
import React, { useContext, useEffect } from "react"

const index = () => {
  const { days, day, temp, city } = useContext(GlobalContext)

  return (
    <div className="bg-blue-400 h-screen">
      <Navbar />
      <h1 className="text-center text-5xl text-white font-semibold  mt-5 ">
        Welcome To Weather Report
      </h1>
      <p className="text-gray-50 text-center mt-5">
        check out the compare page, please don't mind if there's any issues with
        the api (Countries give a wierd output) :/
      </p>
      <p className="text-yellow-300 text-center">
        this site is made for desktops only (its not responsive)
      </p>
      <div className="translate-y-20 mt-20">
        <WeatherCard temp={temp} city={city} days={days} day={day} />
      </div>
    </div>
  )
}

export default index

/*
//todo implement dynamic symbols
todo add text to indicate weather (op)
//todo implement api protection skip
todo api backend task (op) 

*/
