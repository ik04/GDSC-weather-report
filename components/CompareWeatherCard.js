const CompareWeatherCard = (props) => {
  let report = props.report
  let n = 0

  return (
    <div>
      <div className="max-w-md p-8 mx-auto rounded-lg bg-yellow-400 text-black">
        {props.temp ? (
          <>
            <div className="flex justify-between space-x-8">
              <div className="flex flex-col items-center">
                <img
                  src={props.weather}
                  alt="Weather Report"
                  className="w-24 p-2 fill-current scale-125"
                />
                <h1 className="text-xl font-semibold">{props.city}</h1>
              </div>
              <span className="font-bold text-8xl">{props.temp}</span>
            </div>
            <div className="flex justify-between mt-8 space-x-4 text-black">
              {report.map((rep) => {
                n++
                // console.log(n)
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
                }

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
          </>
        ) : (
          <>
            <p className="text-2xl">Please Enter a City</p>
          </>
        )}

        {/* // ? For potential features */}
      </div>
    </div>
  )
}

export default CompareWeatherCard
