import CardTitle from "./CardTitle";
import {claro_img, ils_icon} from "../../utils/ImageManagement";
import React from "react";
import CardSubTitle from "./CardSubTitle";
import './Card.css'

const Card = (props) => {

    return (
        <div>
            {props.type===1 &&
            <div className={'Card-Container_type_1'}>
                <img src={props.image} className={'Img-style'}/>
                <CardTitle title={props.title}/>
                <CardSubTitle subTitle={props.subTitle}/>
            </div>}
            {props.type===2 &&
                <div className={'Card-Container_type_2'}>
                    <img src={props.image} className={'Img-style'}/>
                    <CardTitle title={props.title}/>
                    <div style={{height:'10vw',marginBottom:'5vw'}}>
                        <CardSubTitle subTitle={props.subTitle}/>
                    </div>

                    {props.icon ? <img className={'iconStyle'} src={props.icon} alt='icon'/>:
                    <div className={'iconStyle'}/>}
                        <div className={'bottom-card'}>
                            <div className={'line'}/>
                            <div className={'price-container'}>
                                <img className={'ils'} src={ils_icon} alt='ils-icon'/>
                                <span className={'price'}>{props.price}</span>
                            </div>
                            <div className={'line'}/>
                        </div>

                </div>}
        </div>)

}
export default Card
