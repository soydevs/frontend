import React from 'react'
import { BiSearch } from "react-icons/bi";

import { MainLayout, Trending, Explore } from '../../components'

import budha from '../../assets/svg/budha.svg'
import './HomePage.css'

function HomePage() {
    return (
        <MainLayout>
            <div className="homePage">
                <div className="homePage__header">
                    <div className="homePage__headerText">
                        <p>Hello, Jane !</p>
                        <h1><span className="blue__span">Where</span> do you want to go ?</h1>
                    </div>
                    <form className="homePage__headerSearch">
                        <input type="text" placeholder="Search for a place ...." className="home__search"/>
                        <BiSearch className="home__search_icon" type="submit"/>
                    </form>
                    <img src={budha} alt="budha" /> 
                </div>
                <Explore />
                <Trending />
            </div>
        </MainLayout>
    )
}

export default HomePage
