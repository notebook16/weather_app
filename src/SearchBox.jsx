import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';

export default function SearchBox ({updateInfo}) {
    let[city , setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "4ae4e8d1ac342b0d54190d895c7c5c4d";
  

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
            // Check for a 404 error or any other error status
            if (response.status === 305) {
                throw new Error("City not found");
            }
    
            let ans = await response.json();
    
            let result = {
                city: city,
                temp: ans.main.temp,
                tempMin: ans.main.temp_min,
                tempMax: ans.main.temp_max,
                humidity: ans.main.humidity,
                feelsLike: ans.main.feels_like,
                weather: ans.weather[0].description,
            };
    
            console.log(result);
            return result;
    
        } catch (error) {
            console.error(error.message);
            return { error: "Data not found" };
        }
    };
    
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
    
        let info = await getWeatherInfo();
    
        // Check if the result contains an error and handle accordingly
        if (info.error) {
            console.log("City not found.");
            updateInfo({ city: "City not found" });
        } else {
            updateInfo(info);
        }
    
        setCity("");
    };
    
   

     

    return(
        <>
        <div className='weather'>
           
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="filled" 
                    required
                    value={city}
                    name='city'
                    onChange={handleChange}
                />

                <br></br>
                 <br></br>

                <Button 
                    variant="contained"
                    type='submit'>
                        Search
                </Button>
            </form>
        </div>
        </>
    )
}