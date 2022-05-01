import React from "react";
import "./MainCover.css";
import {epicure_works_p} from "../../utils/DictioneryManagement";
import Search_Field from "../TopBarComponent/Search_Field";
import {cover_img, search_icon_img} from "../../utils/ImageManagement";

const MainCover = (props) => {
    const styles = {
        BackgroundImage:{
            height:props.appWidth>1440 ? 696:696*(props.appWidth/1440)
        },
        search_box_container:{
            width: props.appWidth>1440 ?781:'100%'
        },
        search_field_style: {
            // marginLeft: '16%',
            // width: '55%',
            // marginTop: -20
        },
        // coverImageStyle:{
        //     width: '100%',
        //     maxWidth: 1440,
        //     height: 'auto',
        //     // margin: 9px 0 140px;
        //     // padding: 111px 329px 240px 175px;
        //     objectFit: 'contain',
        //     display:'flex'
        // },
        paragraph:{
            fontSize:props.appWidth>1440 ?35:'2.5vw'
        }
    }
    return (
            <div style={styles.BackgroundImage} className={'BackgroundImage'}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div style={styles.search_box_container} className={'search_box_container'} >
                    <p style={styles.paragraph}className={"Epicure-works-with-t"}>{epicure_works_p}</p>
                    <div className={'search_field_container'}>
                        <div style={{flex:1}}/>
                        <Search_Field withLeftIcon/>
                        <div style={{flex:1}}/>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
    )
}
export default MainCover
