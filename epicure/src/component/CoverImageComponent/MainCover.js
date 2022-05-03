import React from "react";
import "./MainCover.css";
import {epicure_works_p} from "../../utils/DictioneryManagement";
import Search_Field from "../TopBarComponent/Search_Field";
import CoverButtons from "./CoverButtons";

const MainCover = () => {
    return (
        <div>
            <div className={'BackgroundCoverImage'}>
                <div className={'search_box_container'}>
                    <p className={"Epicure-works-with-t"}>{epicure_works_p}</p>
                    <div className={'search_field_container'}>
                        <Search_Field withLeftIcon/>
                    </div>
                </div>


            </div>
            <CoverButtons/>
        </div>

    )
}
export default MainCover
