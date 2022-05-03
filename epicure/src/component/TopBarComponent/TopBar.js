import {bag_icon_img, logo_img, mobileMenuIcon, search_icon_img, user_icon_img} from "../../utils/ImageManagement";
import "./TopBar.css";
import './Search_Field.css'
import React from "react";
import {chefs_str, epicure_str, restaurants_str} from "../../utils/DictioneryManagement";
import Search_Field from "./Search_Field";

const TopBar = () => {
    return (
        <div className={'TopBar-Container'}>
            <img src={mobileMenuIcon} className={'mobileMenuIcon'}/>
            <div className={'left-side'}>
                <img src={logo_img} className={'logo-image'}/>
                <span className={'text-style large-text'}>{epicure_str}</span>
                <span className={'text-style'}>{restaurants_str}</span>
                <span className={'text-style'}>{chefs_str}</span>
            </div>
            <div className={'right-side'}>
                <Search_Field/>
                <img src={search_icon_img} className={'SearchIconStyle searchIcon'}/>
                <img src={user_icon_img} className={'TopBarIcon'}/>
                <img src={bag_icon_img} className={'TopBarIcon'}/>
            </div>
        </div>
    )
}
export default TopBar
