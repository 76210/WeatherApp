import "./SearchBox.css"; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import "./SearchBox.css"; 
import { useState } from "react"; 

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "cf52191f54cb657cebb37c7a49ab54ea";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      // ✅ Check if API returned valid data
      if (jsonResponse.cod !== 200) { 
       // alert(`Error: ${jsonResponse.message}`); 
        setError(true);
        return null;
      }

      const result = {
       
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
       return result;
    } catch (err) {
      console.error("Error fetching weather data:", err);
     //throw err;
     setError(true); 
      return null;
    }
  };

  const handleChange = (evt) => 
    setCity(evt.target.value);
  

  const handleSubmit = async (evt) => {
   try { 
     evt.preventDefault();
    setError(false); // reset error for new search
    if (city.trim() === "") return;

   const newinfo = await  getWeatherInfo();
   if (newinfo) updateInfo(newinfo);
    setCity(""); 
   } catch(err) {
    setError(true);
   }
};

 return (
    <div className="SearchBox">
     
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" color="success" type="submit">
          Search
        </Button>
        {error && <p><b>No such place exists</b></p>} 
      </form>
    </div>
  );
} 
    
     

     



   

 
