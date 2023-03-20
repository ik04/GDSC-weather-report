import { GlobalContext } from "@/context/GlobalContext"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"

const WeatherCard = (props) => {
  const { report, weather } = useContext(GlobalContext)
  var n = 0

  return (
    <div>
      <div className="max-w-md p-8 mx-auto rounded-lg bg-yellow-400 text-black">
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col items-center">
            <img
              src={weather}
              alt="Please wait"
              className="w-96 aspect-auto object-cover mb-2  22 fill-current scale-100 "
            />

            <h1 className="text-xl font-semibold">{props.city}</h1>
          </div>
          <span className="font-bold text-8xl">{props.temp}</span>
        </div>

        <div className="flex justify-between mt-8 space-x-4 text-black">
          {report.map((rep) => {
            n++
            if (n + props.day >= 7) {
              n = -props.day
            }
            let icon
            let weather = rep.weather[0]
            let weatherId = parseInt(weather.id)
            console.log(weatherId)
            if (weatherId === 800) {
              icon = "/clear.png"
            } else if (weatherId >= 801 && weatherId <= 804) {
              icon = "/clouds.png"
              console.log("get over here")
            } else if (weatherId >= 700 && weatherId <= 781) {
              icon = "/haze.png"
            } else if (weatherId >= 600 && weatherId <= 622) {
              icon = "/snow.png"
            } else if (weatherId >= 500 && weatherId <= 531) {
              icon = "/rainy.png"
              console.log("somehow")
            } else if (weatherId >= 200 && weatherId <= 232) {
              icon = "/storm.png"
            } else {
              icon = "/sun.png"
            } //* refactored by chat gpt
            return (
              <div
                className="flex flex-col items-center space-y-1"
                key={rep.dt}
              >
                <span className="uppercase font-semibold">
                  {props.days[props.day + n]}
                </span>
                <img src={icon} alt="" className="scale-75" />

                <span>{rep.main.temp + "°"}</span>
              </div>
            )
          })}
        </div>

        {/* // ? For potential features */}
      </div>
    </div>
  )
}

export default WeatherCard

{
  /* {props.isHome && (
    <div className="flex justify-between mt-8 space-x-4 text-black">
      <div className="flex flex-col items-center space-y-1">
        <img src="/min.png" alt="" />
        <span className="uppercase">Min Temperature</span>
        <span>{props.min}</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <img src="/max.png" alt="" />
        <span className="uppercase">Max Temperature</span>
        <span>{props.max}</span>
      </div>
    </div>
  )} 
  

   <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-8 h-8 fill-current"
                >
                  <path d="M398.2,137.208a144.013,144.013,0,0,0-284.545.979,122.364,122.364,0,0,0-64.357,32.926A109.4,109.4,0,0,0,16,249.619c0,31.119,12.789,60.762,36.01,83.469q2.84,2.776,5.845,5.347l11.327-33.981C56.091,289.3,48,270.017,48,249.619c0-42.362,35.724-78.015,81.329-81.168l14.055-.972.814-14.065a111.995,111.995,0,0,1,223.589-.22l.891,14.888,14.913.155c46.592.488,80.409,34.714,80.409,81.382,0,33.152-16.706,61.38-41.84,75.9L409.032,364.9a110.012,110.012,0,0,0,54.938-32.358C484.625,310.339,496,280.889,496,249.619,496,190.507,454.859,144.4,398.2,137.208Z"></path>
                  <polygon points="126.029 496 159.817 496 223.153 309.136 192.847 298.864 126.029 496"></polygon>
                  <polygon points="294.029 496 327.817 496 391.153 309.136 360.847 298.864 294.029 496"></polygon>
                  <polygon points="290.11 251.033 225.781 448 259.445 448 320.529 260.967 290.11 251.033"></polygon>
                  <polygon points="128.791 251.033 64.461 448 98.125 448 159.209 260.967 128.791 251.033"></polygon>
                </svg>










  
  */
}
