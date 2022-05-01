import {Search_placeholder} from "../../utils/DictioneryManagement";
import {search_icon_img} from "../../utils/ImageManagement";
import React from "react";
import "./TopBar.css";


const Search_Field = (props) => {
    const styles = {
        search_field: {
            padding:'0.5vw'
        },
        inputTextStyle: {
            fontSize: 18,
        },
        SearchIconStyle: {
            width: props.withLeftIcon ? '2vw' : 24,
            height: props.withLeftIcon ? '2vw' : 24,
        }
    }
    return (<>
        {props.withLeftIcon ? <div style={styles.search_field} className={'Search_field'}>
            <img src={search_icon_img} style={styles.SearchIconStyle} className={'SearchIconStyle'}/>
            <input  type={"text"} className={'inputTextStyle'} placeholder={Search_placeholder}/>
        </div> : <div style={styles.search_field} className={'Search_field'}>
            <input type={"text"} className={'inputTextStyle'} style={styles.inputTextStyle} placeholder={Search_placeholder}/>
            <img src={search_icon_img} style={styles.SearchIconStyle} className={'SearchIconStyle'} />
        </div>}
    </>)
}
export default Search_Field
