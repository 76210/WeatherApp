import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox({ info }) {
    const INIT_URL = 
    "https://plus.unsplash.com/premium_photo-1697730344241-13b9acd39f95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171";


    const HOT_URL = "https://images.unsplash.com/photo-1622001979405-502790313bcd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765";

    const COLD_URL = "https://images.unsplash.com/photo-1719374693836-4bfe9b86ad7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";

    const RAIN_URL = "https://images.unsplash.com/photo-1666549235014-6297464b02d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764";


    /*let info = {
         //city: Delhi,
        feelslike: 26.05,
        temp:26.05,
        tempMin:26.05,
        tempMax:26.05,
        humidity:73,
        weather:"smoke"

    };*/

    return (
        <div className="InfoBox">
           
       <div className="cardContainer">  
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        //image={INIT_URL} 
       image={info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}

        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
         {info.city} {
            info.humidity > 80
            ? <ThunderstormIcon />
            : info.temp > 15
            ? <WbSunnyIcon />
            : <AcUnitIcon /> 
             } 
         
         
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.temp}&deg;C</p>
           <p>Max Temp = {info.temp}&deg;C</p>
           <p>The weather can be described as smoke and feels like {info.feelslike}&deg;C</p>
     

        </Typography>
      </CardContent>
      
    </Card>
</div>
        </div>
    );
}