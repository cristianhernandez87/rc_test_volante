import { Link, useLoaderData } from 'react-router-dom'
import { getWeather } from '../helpers/weather'
import { getUserLocation } from '../helpers/location'
import Spinner from '../components/Spinner'

export async function loader() {
  const weather = getWeather()
  
  // if(navigator.geolocation) {
  //   alert('Share location')
  //   const location = await getUserLocation()
  //   console.log(location)
  //   return location
  // }
  
  return weather

}

function Weather(mode) {
  
  const weather = useLoaderData()

  return (
    <>
      <div className="bg bg-color-quintary border border-radius-1 p-3 col-12 col-lg-7 mx-auto h-100">
        <p className="text text-right text-color-secondary m-0"><i>The Weather</i></p>
        <hr className="my-3"/>
        <p className="text text-w-light text-size-3 m-0">New York</p>
        <p className="text text-size-1-5 m-0">NY</p>
        <hr className="my-1"/>
        <p className="text text-w-light text-size-6 text-center">{weather[mode.mode]}°</p>
        <div className="text text-center">
          <Link
            to="/weather/c"
            className="btn btn-solid btn-solid-primary p-2 text-center text text-color-white mx-3 d-inline-block"
          >°C</Link>
          <Link
            to="/weather/f"
            className="btn btn-solid btn-solid-primary p-2 text-center text text-color-white mx-3 d-inline-block"
          >°F</Link>
        </div>
      </div>
    </>
  )
}

export default Weather