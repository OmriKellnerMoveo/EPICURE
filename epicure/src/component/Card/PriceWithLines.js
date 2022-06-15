import './PriceWithLines.css'
import {ils_icon} from "../../utils/ImageManagement";
import React from "react";
const PriceWithLines=(props)=>{
    return(
        <div className={'bottom-card'}>
            <div className={'line'}/>
            <div className={'price-container'}>
                <div className={'imgContainer'}>
                    <img className={'ils'} src={ils_icon} alt='ils-icon'/>
                </div>
                <span className={'price'}>{props.price}</span>
            </div>
            <div className={'line'}/>
        </div>
    )
}
export default PriceWithLines
