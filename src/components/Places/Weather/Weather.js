import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { WiDayCloudyGusts } from "react-icons/wi";
import { useParams } from 'react-router-dom';

import sunnyD from '../../../assets/svg/weather/sunnyD.svg'
import sunnyM from '../../../assets/svg/weather/sunnyM.svg'

import upcoming from '../../../assets/svg/weather/upcoming.svg'

import './Weather.css'
import requestHandler from '../../../hooks/requestHandler';

function Weather() {

    const { place } = useParams();
    const [weather, setWeather] = useState();

    const useStyles = makeStyles((t) => ({
        container: {
            backgroundImage: `url(${sunnyD})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            borderRadius: '70px 70px 0 0',
            [t.breakpoints.down('sm')]: {
                backgroundImage: `url(${sunnyM})`,
            },
        }
    }));

    const classes = useStyles();

    useEffect(()=>{
        requestHandler('GET','/api/weather/' + place).then(response => {
            if(response.success) {
                setWeather(response.data.weatherData)
            }
            else {
                console.log(response)
                console.log("Weather data not available!")
            }
        })
    },[place])



    const displayDate = (d) => {
        const date = new Date(d)
        var options = { month: 'long'};
        var monthName = new Intl.DateTimeFormat('en-US', options).format(date)
        var day = date.getDate()
        
        return `${monthName.slice(0,3)} ${day}`
    }

    return (
        <div className="weather">
            { weather ?
            (<>
            <div className={classes.container}>
                <div className="weather__content">
                    <p>{weather.currentWeather.lastUpdated}</p>
                    <h1>{weather.currentWeather.celsius}°C</h1>
                    <h3>{weather.currentWeather.weather}</h3>
                </div>
            </div>
            <div className="weather__details">
                <h2>Details</h2>
                <div className="weather__details_container">
                    <div className="wdc">
                        <div className="weatherCard">
                            <p>Last Updated </p>
                            <h2>{weather.currentWeather.lastUpdated}</h2>
                        </div>
                        <div className="weatherCard">
                            <p>Today </p>
                            <h2>{new Date().toLocaleDateString()}</h2>
                        </div>
                    </div>
                    <div className="wdc">
                        <div className="weatherCard">
                            <p>Feels like</p>
                            <h2>{weather.currentWeather.feelsLikeCelsius}°C</h2>
                        </div>
                        <div className="weatherCard">
                            <p>Precipitation</p>
                            <h2>{weather.currentWeather.precipitationMM} mm</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather__upcoming">
                <h2>Upcoming</h2>
                <div className="upcoming__container">
                    <img src={upcoming} className="upcoming_img" alt=''/>
                   {weather.forecasts.map(f=>{
                       return (
                    <div key={f.date} className="upcoming">
                        <h3 className="upcoming_date">{displayDate(f.date)}</h3>
                        <WiDayCloudyGusts className="upcoming_icon"/>
                        <h3 className="upcoming_type">{f.weather.trim()}</h3>
                        <h4 className="upcoming_temp">{f.minTempCelsius}°C / {f.maxTempCelsius}°C</h4>
                    </div>
                       )
                   })}
                    
                </div>
            </div> 
            </>): (<>Weather data not available!</>)
        }
        </div>
    )
}

export default Weather
