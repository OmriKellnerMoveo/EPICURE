import SubSectionTitle from "../ChefRestaurants/SubSectionTitle";
import {about_us_paragraph_1,about_us_paragraph_2, about_us_str} from "../../utils/DictioneryManagement";
import React from "react";
import './AboutUs.css'
import {about_us_logo_icon} from "../../utils/ImageManagement";
import AboutUsButtons from "./AboutUsButtons";
import '../../Animation/bounce-in-top.css'
const AboutUs=()=>{
    return(<div className={'SubSectionContainer'}>
        <SubSectionTitle title={about_us_str}/>
        <div  className={'SubSectionChild'}>
            <div>
                <p className={'about_us_paragraph'}>{about_us_paragraph_1}</p>
                <p className={'about_us_paragraph'}>{about_us_paragraph_2}</p>
            </div>
            <img className={'about_us_icon bounce-in-top'} src={about_us_logo_icon} alt='about us'/>
        </div>
       <AboutUsButtons/>
    </div>)
}
export default AboutUs
