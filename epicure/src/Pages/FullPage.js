import {GlobalColor} from "../utils/GlobalColor";
import TopBar from "../component/TopBarComponent/TopBar";
import React from "react";
import {useWindowDimensions} from "../utils/WindowsDimensions";
import BottomMenuBar from "../component/ButtomMenuBar/BottomMenuBar";

const FullPage=(props)=>{
    const {width} = useWindowDimensions()
    const styles = {
        container: {
            textAlign: 'center',
            margin: 'auto',
            backgroundColor: ' #ffffff',
            borderRadius: 4,
            borderColor: GlobalColor.brown_grey,
            borderStyle: 'solid',
            borderWidth: 0.4,
            width: width !== null && width > 1440 ? 1440 : width,
        }
    }
    return(
        <div style={styles.container}>
            <TopBar/>
            {props.children}
            <BottomMenuBar/>
        </div>
    )
}
export default FullPage
