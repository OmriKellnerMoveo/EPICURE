import {GlobalColor} from "../utils/GlobalColor";
import TopBar from "../component/TopBarComponent/TopBar";
import MainCover from "../component/CoverImageComponent/MainCover";
import SectionTitle from "../component/SectionTitle/SectionTitle";
import {
    chef_of_the_week_str,
    chefs_restaurants,
    popular_restaurants,
    signature_dish
} from "../utils/DictioneryManagement";
import React from "react";
import {useWindowDimensions} from "../utils/WindowsDimensions";
import './HomePage.css'
import All_Restaurants_link from "../component/All_Restaurants_link/All_Restaurants_link";
import RowCard from "../component/Card/RowCard";
import {RowCard_1, RowCard_2, RowCard_3} from "../utils/DefualtJson";
import IconsMeaning from "../component/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../component/ChefOfTheWeek/ChefOfTheWeek";
import SubSectionTitle from "../component/ChefRestaurants/SubSectionTitle";
import AboutUs from "../component/AboutUs/AboutUs";
import BottomMenuBar from "../component/ButtomMenuBar/BottomMenuBar";

const HomePage = () => {
    const {width} = useWindowDimensions()

    const styles = {
        container: {
            textAlign: 'center',
            margin: 'auto',
            backgroundColor: ' #ffffff',
            borderRadius: 4,
            borderColor: GlobalColor.brown_grey,
            borderStyle: 'solid',
            borderWidth: 0.4,
            width: width !== null && width > 1440 ? 1440 : width,
        }
    }
    return (
        <div style={styles.container}>
            <TopBar/>
            <MainCover/>
            <SectionTitle title={popular_restaurants}/>
            <RowCard card_list={RowCard_1} type={1}/>
            <All_Restaurants_link/>
            <SectionTitle title={signature_dish}/>
            <RowCard card_list={RowCard_2} type={2}/>
            <IconsMeaning/>
            <SectionTitle title={chef_of_the_week_str}/>
            <ChefOfTheWeek/>
            <SubSectionTitle title={chefs_restaurants}/>
            <RowCard card_list={RowCard_3} type={3}/>
            <AboutUs/>
            <BottomMenuBar/>
        </div>
    )
}
export default HomePage
