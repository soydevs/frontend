import React, { useContext } from 'react'
import { BiSearch } from "react-icons/bi";

import { MainLayout, Trending, Explore } from '../../components'
import { AuthContext } from '../../context/AuthContext'

import budha from '../../assets/svg/budha.svg'
import './HomePage.css'

function HomePage() {

    const { name } = useContext(AuthContext);

    const shortname = (name) => {
        if (name)
            return name.split(" ")[0]
    }

    return (
        <MainLayout>
            <div className="homePage">
                <div className="homePage__header">
                    <div className="homePage__headerText">
                        <p>Hello, {shortname(name)}!</p>
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
