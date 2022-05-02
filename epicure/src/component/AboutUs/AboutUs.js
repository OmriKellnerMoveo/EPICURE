import SubSectionTitle from "../ChefRestaurants/SubSectionTitle";
import {about_us_paragraph, about_us_str} from "../../utils/DictioneryManagement";
import React from "react";
import './AboutUs.css'
import {about_us_logo_icon} from "../../utils/ImageManagement";
import AboutUsButtons from "./AboutUsButtons";
const AboutUs=()=>{
    return(<div className={'SubSectionContainer'}>
        <SubSectionTitle title={about_us_str}/>
        <div  className={'SubSectionChild'}>
            <p className={'about_us_paragraph'}>{about_us_paragraph}</p>
            <img className={'about_us_icon'} src={about_us_logo_icon} alt='about us'/>
        </div>
       <AboutUsButtons/>
    </div>)
}
export default AboutUs
