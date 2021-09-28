import React, { useState } from 'react';
import './App.css';

const api ={
  key: "b4f10d2ca080466b0ea4b2ce0325ed40"
  ,
  base : "https://api.openweathermap.org/data/2.5/"
}



function App() {
  const [query,setQuery] = useState("");
  const [weather,setWeather] = useState({});
  const search =event =>{
    if (event.key==="Enter")
    {
      fetch (`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then (res => res.json())
        .then (result =>{ 
          setQuery ("");
          setWeather (result)
        console.log(result)
        });
    }
  }





  const dateBuilder = (d) =>{
    let months = ["Jan", "Feb", "Mar", "Apr", "May","june","july","aug","sep","oct","nov","dec"];
    let days = [  "Tue", "Wed", "Thu","fri","sat","Sun","Mon",];

    let day= days[d.getDay()];
    let date= d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


      return` ${day }${date} ${month} ${year}`


  }
  return (
    <div className={
      (typeof weather.main != 'undefined')
      ? ((weather.main.temp>16)
      ? 'App warm'
      :'App')
      :'App' }>
      <main>
          <div className="search-box">
            <input
             type="text" 
             placeholder="search..."
             className="search-bar"
             onChange={e=>setQuery(e.target.value)}
             value={query}
             onKeyPress={search}
             >

             </input>
          </div>

          {(typeof weather.main!=="undefined") ?(
               <div> 

<div className="location-box">
              <div className="location">
                {weather.name} , {weather.name.wind}
              </div>
              <div className="date">
                {dateBuilder(new Date())}
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)} c
                </div>
                <div className="weather">
                  {weather.weather[0].main}
                </div>
              </div>
          </div>

               </div>


          )
          
          
          
          
          
          : ("")  }
          
      </main>
    </div>
  );
}

export default App;
