import { Link, useLoaderData } from 'react-router-dom'
import { getWeather, getWeatherData } from '../helpers/weather'
import { getUserLocation } from '../helpers/location'

export async function loader() {

  const lat = "39.7456"
  const long = "-97.0892"
  
  return new Promise( async(resolve, reject) => {
    if (navigator.geolocation) {

      const location = await getUserLocation();
      const wLat = location[0];
      const wLong = location[1];
      const weather = await getWeather(wLat || lat, wLong || long);
      
      if(weather.status === 404) {
        const weather = await getWeather(lat, long);
        const weatherData = await getWeatherData(weather.properties.forecast);
        weather._data = weatherData;
        resolve(weather);
      } else {
        const weatherData = await getWeatherData(weather.properties.forecast);
        weather._data = weatherData;
        resolve(weather);
      }
    }
  })
  
}

function Weather({mode}) {
  
  const weather = useLoaderData(); 
  const ferenheit = weather._data.properties.periods[0].temperature
  const celsius = (ferenheit - 32) * (5/9).toFixed(2);

  return (
    <>
      <div className="bg bg-color-quintary border border-radius-1 p-3 col-12 col-lg-7 mx-auto h-100">
        <p className="text text-right text-color-secondary m-0"><i>The Weather</i></p>
        <hr className="my-3"/>
        <p className="text text-w-light text-size-3 m-0">{weather.properties.relativeLocation.properties.city}</p>
        <p className="text text-size-1-5 m-0">{weather.properties.relativeLocation.properties.state}</p>
        <hr className="my-1"/>
          <p className="text text-w-light text-size-6 text-center mb-0">{mode === 'ferenheit' ? ferenheit : celsius}°</p>
          <p className="text text-w-light text-center mb-5">{mode === 'ferenheit' ? "ferenheit" : "celsius"}°</p>
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