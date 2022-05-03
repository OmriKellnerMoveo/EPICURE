import {Search_placeholder} from "../../utils/DictioneryManagement";
import {search_icon_img} from "../../utils/ImageManagement";
import React from "react";
import './Search_Field.css'
import '../../Animation/rotate-scale-up.css'

const Search_Field = (props) => {
    return (<>
        {props.withLeftIcon ?
            <div className={'big-Search_field'}>
            <img src={search_icon_img} className={'SearchIconStyle SearchExtraStyle-IconStyle rotate-scale-up' }/>
            <input type={"text"} className={'inputTextStyle inputExtraStyle-TextStyle'} placeholder={Search_placeholder}/>
        </div> :
            <div className={'Search_field'}>
            <input type={"text"} className={'inputTextStyle'} placeholder={Search_placeholder}/>
            <img src={search_icon_img} className={'SearchIconStyle'}/>
        </div>}
    </>)
}
export default Search_Field
