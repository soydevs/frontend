import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { WiDayCloudyGusts } from "react-icons/wi";

import sunnyD from '../../../assets/svg/weather/sunnyD.svg'
import sunnyM from '../../../assets/svg/weather/sunnyM.svg'

import './Weather.css'

function Weather() {

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


    return (
        <div className="weather">
            <div className={classes.container}>
                <div className="weather__content">
                    <p>11:30 am</p>
                    <h1>37°C</h1>
                    <h3>Sunny</h3>
                </div>
            </div>
            <div className="weather__details">
                <h2>Details</h2>
                <div className="weather__details_container">
                    <div className="wdc">
                        <div className="weatherCard">
                            <p>Last Updated </p>
                            <h2>11:00 am</h2>
                        </div>
                        <div className="weatherCard">
                            <p>Today </p>
                            <h2>Sept 16</h2>
                        </div>
                    </div>
                    <div className="wdc">
                        <div className="weatherCard">
                            <p>Min Temp.</p>
                            <h2>27°C</h2>
                        </div>
                        <div className="weatherCard">
                            <p>Max Temp.</p>
                            <h2>37°C</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather__upcoming">
                <h2>Upcoming</h2>
                <div className="upcoming__container">
                    <div className="upcoming">
                        <h3 className="upcoming_date">Sept 17</h3>
                        <WiDayCloudyGusts className="upcoming_icon"/>
                        <h3 className="upcoming_type">Cloudy</h3>
                        <h4 className="upcoming_temp">27°C / 35°C</h4>
                    </div>
                    <div className="upcoming">
                        <h3 className="upcoming_date">Sept 17</h3>
                        <WiDayCloudyGusts className="upcoming_icon"/>
                        <h3 className="upcoming_type">Cloudy</h3>
                        <h4 className="upcoming_temp">27°C / 35°C</h4>
                    </div>
                    <div className="upcoming">
                        <h3 className="upcoming_date">DEcember 17</h3>
                        <WiDayCloudyGusts className="upcoming_icon"/>
                        <h3 className="upcoming_type">Cloudy</h3>
                        <h4 className="upcoming_temp">27°C / 35°C</h4>
                    </div>
                    <div className="upcoming">
                        <h3 className="upcoming_date">Sept 17</h3>
                        <WiDayCloudyGusts className="upcoming_icon"/>
                        <h3 className="upcoming_type">Cloudy</h3>
                        <h4 className="upcoming_temp">27°C / 35°C</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
