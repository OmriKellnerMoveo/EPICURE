import {bag_icon_img, logo_img, search_icon_img, user_icon_img} from "../../utils/ImageManagement";
import "./TopBar.css";
import React from "react";
import {chefs_str, epicure_str, restaurants_str} from "../../utils/DictioneryManagement";
import Search_Field from "./Search_Field";


const TopBar = (props) => {
    const isMobileMode=props.appWidth<900
    const styles = {
        Rectangle: {
            width: '100%',
            height: 53,
            backgroundColor: 'white',
            display: 'flex',
            paddingInline: 123,
            paddingTop: 14,
            paddingBottom: 5,
        },
        leftSideDiv: {
            flex: 2
        },

        logo_img: {
            width: 33,
            height: 33,
            objectFit: 'contain',
            marginLeft:isMobileMode && '50%'
        },
        epicureStrStyle: {
            width: 115,
            height: 32,
            marginLeft: 15,
            fontSize: 27,
            letterSpacing: 1.35,
        },
        Restaurants: {
            width: 110,
            height: 21,
            marginLeft: 28,
            fontSize: 18,
            letterSpacing: 1.92,
        },
        Chefs: {
            width: 54,
            height: 21,
            marginLeft: 31,
            fontSize: 18,
            letterSpacing: 1.92,
        },
        rightSideDiv: {
            marginTop: 7,
            flex: 1.5
        },
        IconsSideDiv: {
            textAlign:'right',
            marginTop: 13,
            flex:!isMobileMode&& 0.4,
            marginRight: isMobileMode ? '30%':'15%',
        },
        iconStyle: {
            width: 23,
            height: 23,
            objectFit: 'contain',
        },
        baseTextStyle: {
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 'normal',
            fontWeight: 100,
            fontFamily: 'HelveticaNeue',
            color: 'black',
        },SearchIconStyle: {
            marginRight: 28,
            marginTop: 12,
            flex: 0.2,
            width:  24,
            height: 24,
            objectFit: 'contain'
        }

    }
    return (<div style={styles.Rectangle}>
        <div style={styles.leftSideDiv}>
            <img src={logo_img} style={styles.logo_img}/>
            {!isMobileMode && <span style={{...styles.baseTextStyle, ...styles.epicureStrStyle}}>{epicure_str}</span>}
            {!isMobileMode &&<span style={{...styles.baseTextStyle, ...styles.Restaurants}}>{restaurants_str}</span>}
            {!isMobileMode && <span style={{...styles.baseTextStyle, ...styles.Chefs}}>{chefs_str}</span>}
        </div>
        {props.appWidth>1300&& <div style={styles.rightSideDiv}>
            <Search_Field/>
        </div>  }

        <div style={styles.IconsSideDiv}>
            {props.appWidth<1300  &&<img src={search_icon_img} style={styles.SearchIconStyle}/>}
            <img src={user_icon_img} style={{...styles.iconStyle, marginRight: 28}}/>
            <img src={bag_icon_img} style={styles.iconStyle}/>
        </div>
    </div>)
}
export default TopBar
