import React, { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import axios from "axios"

const GlobalState = (props) => {
  const [temp, setTemp] = useState()
  const [city, setCity] = useState("Chennai")
  const [report, setReport] = useState([])
  const [weatherIcon, setWeatherIcon] = useState("")
  const [weatherDescription, setWeatherDescription] = useState("")
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9cea11792033d87ab898b1ed61c17d8c&units=metric`
  // * sry for keeping this in frontend, this is only to show my app works and won't be repeated in the future

  const d = new Date()
  var day = d.getDay()
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  var fullDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(url)
      // console.log(resp)
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
      let weatherId = weather.id
      let weatherDesc = weather.description
      let icon
      if (weatherId === 800) {
        icon = "/clear.png"
      } else if (weatherId >= 200 && weatherId <= 232) {
        icon = "/storm.png"
      } else if (
        (weatherId >= 300 && weatherId <= 321) ||
        (weatherId >= 500 && weatherId <= 531)
      ) {
        icon = "/rainy.png"
      } else if (weatherId >= 600 && weatherId <= 622) {
        icon = "/snow.png"
      } else if (weatherId >= 700 && weatherId <= 781) {
        icon = "/haze.png"
      } else if (weatherId >= 801 && weatherId <= 804) {
        icon = "/clouds.png"
      } else {
        icon = "/sun.png"
      }

      setWeatherDescription(weatherDesc)
      setWeatherIcon(icon)
      setTemp(currentDay.main.temp + "°")
      setReport(report)
    }
    getWeather()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        weatherDescription,
        weatherIcon,
        setCity,
        report,
        fullDays,
        day,
        days,
        temp,
        city,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
