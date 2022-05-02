import React from "react";
import "./MainCover.css";
import {epicure_works_p} from "../../utils/DictioneryManagement";
import Search_Field from "../TopBarComponent/Search_Field";

const MainCover = (props) => {
    const styles = {
        BackgroundImage: {
            height: props.appWidth > 1440 ? 696 : 696 * (props.appWidth / 1440)
        }, search_box_container: {
            width: props.appWidth > 1440 ? 781 : '100%'
        }, paragraph: {
            fontSize: props.appWidth > 1440 ? 35 : '2.5vw'
        }
    }
    return (<div style={styles.BackgroundImage} className={'BackgroundImage'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div style={styles.search_box_container} className={'search_box_container'}>
            <p style={styles.paragraph} className={"Epicure-works-with-t"}>{epicure_works_p}</p>
            <div className={'search_field_container'}>
                <div style={{flex: 1}}/>
                <Search_Field withLeftIcon/>
                <div style={{flex: 1}}/>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>)
}
export default MainCover
