import SearchBox from './SearchBox.jsx';
import InfoBox from "./InfoBox.jsx";
import { useState } from 'react';

export default function WeatherApp() {
    const[weatherInfo, setWeatherInfo] = useState({

        
         city: "Delhi",
        feelsLike: 26.05,
        temp:26.05,
        tempMin:26.05,
        tempMax:26.05,
        humidity:73,
        weather:"smoke"

    
    });


     const updateInfo = ( newInfo ) => {
        setWeatherInfo(newInfo);

     };
     
    return (
<div style={{textAlign: "center"}}>
    <h2>Weather App by Delta</h2>

   {/*<SearchBox/>
   <InfoBox/> */} 
   <SearchBox updateInfo={updateInfo} />
  <InfoBox info={weatherInfo}/> 

</div>
    );
}