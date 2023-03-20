import CompareWeatherCard from "@/components/CompareWeatherCard"
import Navbar from "@/components/Navbar"
import WeatherCard from "@/components/WeatherCard"
import { GlobalContext } from "@/context/GlobalContext"
import axios from "axios"
import React, { useContext, useState } from "react"

const Compare = () => {
  const { day, fullDays, days } = useContext(GlobalContext)
  const [displayTemp, setDisplayTemp] = useState()
  const [city, setCity] = useState("")
  const [displayError, setDisplayError] = useState("")
  const [weather, setWeather] = useState("")
  const [report, setReport] = useState([])
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9cea11792033d87ab898b1ed61c17d8c&units=metric`

  const getWeather = async (e) => {
    // * Prevents refresh
    e.preventDefault()
    try {
      const resp = await axios.get(url)
      let report = []
      let currentDay
      for (let index = 0; index < 40; index++) {
        if (index % 8 === 0) {
          const element = resp.data.list[index]
          report.push(element)
        }
      }
      report.push(resp.data.list[39])
      currentDay = report.shift()
      let weather = currentDay.weather[0]
      console.log(weather.id)
      let icon

      if (weather.id === 500) {
        icon = "/rainy.png"
      } else if (weather.id === 800) {
        icon = "/clear.png"
      } else if (800 < weather.id <= 804) {
        icon = "/clouds.png"
      } else if (weather.id === 600 || 600 <= weather.id <= 622) {
        icon = "/snow.png"
      } else if (700 <= weather.id <= 781) {
        icon = "/haze.png"
      } else if (weather.id === 200 || 200 <= weather.id <= 232) {
        icon = "/storm.png"
      } else {
        icon = "/sun.png"
      }
      setWeather(icon)
      setDisplayTemp(currentDay.main.temp + "°")
      setReport(report)
    } catch (error) {
      console.log(error)
      setDisplayError("An Error Occured, please enter a valid city")
    }
  }

  return (
    <div className="bg-blue-400 h-screen overflow-y-hidden">
      <Navbar />
      <div className="absolute left-1/2 top-40 mt-10 -translate-x-1/2 bg-blue-300 p-20 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-center text-5xl font-extrabold">
            Today's Day: {fullDays[day]}
          </h1>
          <div className=" flex-col mb-5 mt-2 justify-center">
            <h1 className="text-center text-2xl mb-2 mt-2">Search Cities:</h1>
            <form
              onSubmit={getWeather}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  getWeather(e)
                }
              }}
            >
              <input
                type="text"
                className="border border-black p-3 mx-5  ml-16"
                name="city"
                onChange={(e) => {
                  setCity(e.target.value)
                  setDisplayError("")
                  setDisplayTemp("")
                }}
              />
              <button className="bg-yellow-300 mb-5 p-3 transition delay-150x ease-in hover:bg-blue-400 hover:text-white  text-black">
                Submit
              </button>
            </form>
          </div>
          {/* check for temperature to set svg */}
          <p className="text-red-500 text-center text-xl font-thin">
            {displayError}
          </p>

          <CompareWeatherCard
            city={city}
            temp={displayTemp}
            days={days}
            day={day}
            report={report}
            weather={weather}
          />
        </div>
      </div>
    </div>
  )
}

export default Compare
// TODO make it more similar to the figma design as refactor tommorow
