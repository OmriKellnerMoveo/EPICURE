import React from "react";
import './CoverButton.css'
const CoverButton = (props) => {
    return (
        <button className={'CoverButton-Style'} type={"button"}>
            <span className={'CoverButtonText'}>{props.title}</span>
        </button>

  )
}
export default CoverButton
