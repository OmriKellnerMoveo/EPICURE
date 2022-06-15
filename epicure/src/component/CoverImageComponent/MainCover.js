import React from "react";
import "./MainCover.css";
import {epicure_works_p} from "../../utils/DictioneryManagement";
import Search_Field from "../TopBarComponent/Search_Field";
import CoverButtons from "./CoverButtons";
import '../../Animation/scale-up-center.css'
import '../../Animation/text-focus-in.css'
const MainCover = () => {
    return (
        <>
            <div className={'BackgroundCoverImage scale-up-center'}>
                <div className={'search_box_container'}>
                    <p className={"Epicure-works-with-t text-focus-in"}>{epicure_works_p}</p>
                    <div className={'search_field_container'}>
                        {/*<Search_Field withLeftIcon/>*/}
                    </div>
                </div>
            </div>
            <CoverButtons/>
        </>

    )
}
export default MainCover
