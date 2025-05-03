import React, { useState } from 'react'

const Weather = () => {
 const[city,setCity] = useState("")
const[weather,setWeather] = useState("")

 const WeatherHandler = async () =>{
       const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae538ed072ef2c0480f7c5c976f45871&units=metric`)
       const jsonData = await res.json();
       setWeather(jsonData)
      }
      console.log(weather);
      

  return (
    <div className='min-h-screen bg-blue-100 flex flex-col items-center justify-center'>
      <div className='max-w-lg w-full bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-center mb-4'>Weather App</h1>
        <input type="text" placeholder='Enter City Name' className='p-2 border border-gray-300 rounded-md w-full md-4' value={city} onChange={(e)=> setCity(e.target.value)} />
      <button className='bg-amber-400 p-2 rounded w-full cursor-pointer my-2' onClick={WeatherHandler}>Search</button>
      <div className='text-center'>
            {
              weather ? (
                <>
                <h1 className='font-bold text-2xl'>{weather.name}</h1>
                <p>{weather.weather[0].description}</p>
                <p className='text-3xl font-bold'>{weather.main.temp}°C</p>
                <div className='mt-4 font-bold text-2x'>
                  <p>Humadity:{weather.main.humidity} %</p>
                  <p>Wind Speed:{weather.wind.speed} m/s</p>
                </div>
                </>
              ) :(
                <h1 className='font-bold'>Enter A City Name To Get Data</h1>
              )
            }
            
           

      </div>
      </div>
    </div>
  )
}

export default Weather
