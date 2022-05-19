import MainCover from "../component/CoverImageComponent/MainCover";
import SectionTitle from "../component/SectionTitle/SectionTitle";
import {
    chef_of_the_week_str,
    chefs_restaurants,
    popular_restaurants,
    signature_dish
} from "../utils/DictioneryManagement";
import React, {useEffect, useState} from "react";
import './HomePage.css'
import All_Restaurants_link from "../component/All_Restaurants_link/All_Restaurants_link";
import IconsMeaning from "../component/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../component/ChefOfTheWeek/ChefOfTheWeek";
import SubSectionTitle from "../component/ChefRestaurants/SubSectionTitle";
import AboutUs from "../component/AboutUs/AboutUs";
import Splide from "../component/Card/RowCards";
import {getChefOfTheWeek, getChefOfTheWeekRestaurant, getPopularRestaurant, getSignatureDish} from "../server";

const HomePage = () => {
    const [popularRestaurants,setPopularRestaurants] = useState([])
    const [signatureDishes,setSignatureDishes] = useState([])
    const [chefOfTheWeek,setChefOfTheWeek] = useState([])
    const [chefOfTheWeekRestaurants,setChefOfTheWeekRestaurants] = useState([])

    useEffect(() => {
        getPopularRestaurant(setPopularRestaurants).then()
        getSignatureDish(setSignatureDishes).then()
        getChefOfTheWeek(setChefOfTheWeek).then()
        getChefOfTheWeekRestaurant(setChefOfTheWeekRestaurants).then()
    }, [])

    return (<>
            <MainCover />
            <SectionTitle title={popular_restaurants} marginTop={'10vw'}/>
            <Splide card_list={popularRestaurants} type={1}/>
            <All_Restaurants_link/>
            <SectionTitle title={signature_dish} marginTop={'10vw'}/>
            <Splide card_list={signatureDishes} type={2}/>
            <IconsMeaning/>
            <SectionTitle title={chef_of_the_week_str}/>
            <ChefOfTheWeek chef={chefOfTheWeek}/>
            <SubSectionTitle title={chefOfTheWeek['chef_id'] && chefOfTheWeek['chef_id'].name + chefs_restaurants } alignLeft/>
            <Splide card_list={chefOfTheWeekRestaurants} type={3}/>
            <AboutUs/>
        </>

    )
}
export default HomePage
