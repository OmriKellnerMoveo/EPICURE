import React from "react";
import './CoverButtons.css'
import CoverButton from "./CoverButton";
const CoverButtons = () => {
    return (<div className={'CoverButtons-Container'}>
        <CoverButton title={'CHEFS'}/>
        <CoverButton title={'RESTAURANTS'}/>
    </div>)
}
export default CoverButtons
