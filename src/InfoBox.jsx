import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



export default function InfoBox({info}) {

const weatherImage = {
    dusty: "https://plus.unsplash.com/premium_photo-1672437690066-266aecb47e3a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cold: "https://images.unsplash.com/photo-1550077404-c00d89693129?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
    hot: "https://images.unsplash.com/photo-1567787782997-319ae6cf2edc?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
}    


    

    return (
        <div className="weather">
               
                <Card sx={{ maxWidth: 420  }}>
                    <CardMedia
                        sx={{ height: 200, width: 350 , marginLeft: 4, marginTop: 1 , }}
                        image = {info.temp > 25 ? weatherImage.hot: weatherImage.cold}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" component = {"span"} sx={{ color: 'text.secondary' }}>

                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>min temp = {info.tempMin}&deg;C</p>
                            <p>max Temp = {info.tempMax}&deg;C</p>
                            <p>feels like = {info.feelsLike}&deg;C</p>
                            <p>weither is = {info.weather}</p>
                        </Typography>
                    </CardContent>
                  
                </Card>
        </div>
    ) 
}






