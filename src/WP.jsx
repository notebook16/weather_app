import SearchBox from './SearchBox';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';





export default function WP () {

    const[wetInfo , setWetInfo] = useState({
        city: "city",
        feelsLike: 23.32,
        humidity: 755,
        temp: 23.05,
        tempMax: 23.05,
        tempMin: 23.05,
        weather: "haze"
    });


    //this function change the state to re render
    //but how will the result come?
    let updateInfo = (result) => {
        setWetInfo(result);
    }

    

    return (

        <>
        <div className='boxw'> 
            <h1 className='head'>My Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {wetInfo}/>
        </div>
         
 
         </>

         
       
         

    )
}