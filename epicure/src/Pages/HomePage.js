import {GlobalColor} from "../utils/GlobalColor";
import TopBar from "../component/TopBarComponent/TopBar";
import MainCover from "../component/CoverImageComponent/MainCover";
import SectionTitle from "../component/SectionTitle/SectionTitle";
import {Claro_str, popular_restaurants, signature_dish} from "../utils/DictioneryManagement";
import React from "react";
import {useWindowDimensions} from "../utils/WindowsDimensions";
import Card from "../component/Card/Card";
import './HomePage.css'
import All_Restaurants_link from "../component/All_Restaurants_link/All_Restaurants_link";
import RowCard from "../component/Card/RowCard";
import {RowCard_1, RowCard_2} from "../utils/DefualtJson";
const HomePage=()=>{
    const {width}=useWindowDimensions()

    const styles={
        container:{
            textAlign:'center',
            margin:'auto',
            height: 4354,
            backgroundColor:' #ffffff',
            borderRadius: 4,
            borderColor: GlobalColor.brown_grey,
            borderStyle: 'solid',
            borderWidth: 0.4,
            width: width!==null && width > 1440 ? 1440:width,
        }
    }
    return(
        <div style={styles.container}>
            <TopBar
                appWidth={width}
            />
            <MainCover appWidth={width}/>
            <SectionTitle title={popular_restaurants}/>
            <RowCard card_list={RowCard_1} type={1}/>
            <All_Restaurants_link/>
            <SectionTitle title={signature_dish}/>
            <RowCard card_list={RowCard_2} type={2}/>




        </div>
    )
}
export default HomePage
