import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1528283648649-33347faa5d9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1675695759698-5aa675b7f972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let COLD_URL = "https://images.unsplash.com/photo-1530179123598-38d05c67c1b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1653274575917-f99f6553c726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxyYWlueSUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity >80 
          ? <ThunderstormIcon />
          :info.temp > 15 
          ? <WbSunnyIcon/> : <AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p> Temperature = {info.temp}&deg;C </p>
          <p> Humidity = {info.humidity} </p>
          <p> Min Temp = {info.tempMin}&deg;C </p>
          <p> Max Temp = {info.tempMax}&deg;C </p>
          <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}