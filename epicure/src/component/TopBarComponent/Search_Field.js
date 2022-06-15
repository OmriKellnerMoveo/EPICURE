import {Search_placeholder} from "../../utils/DictioneryManagement";
import {search_icon_img} from "../../utils/ImageManagement";
import React, {useState} from "react";
import './Search_Field.css'
import '../../Animation/rotate-scale-up.css'
import {serverApi} from "../../utils/GlobalApi";

const Search_Field = (props) => {
    const [searchText, setSearchText] = useState('')

    const handleTextInput = (event) => {
        setSearchText(event.target.value)
    }
    const sendApiRequest = async () => {
        const url = `${serverApi}/api/v1/search/${searchText}`;
        const response = await fetch(url)
        const responseJson = await response.json();
        console.log(responseJson)
    }
    return (<>
        {props.withLeftIcon ? <div className={'big-Search_field'}>
            {/*<img src={search_icon_img} className={'SearchIconStyle SearchExtraStyle-IconStyle rotate-scale-up'}*/}
            {/*     onClick={sendApiRequest} alt='search_icon'/>*/}
            {/*<input onChange={handleTextInput} type={"text"} className={'inputTextStyle inputExtraStyle-TextStyle'}*/}
            {/*       placeholder={Search_placeholder}/>*/}
        </div> : <div className={'Search_field'}>
            {/*<input type={"text"} className={'inputTextStyle'} placeholder={Search_placeholder}/>*/}
            {/*<img src={search_icon_img} className={'SearchIconStyle'} onClick={sendApiRequest} alt='search_icon'/>*/}
        </div>}
    </>)
}
export default Search_Field
