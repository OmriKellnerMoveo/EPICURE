import CardTitle from "./CardTitle";
import React from "react";
import CardSubTitle from "./CardSubTitle";
import './Card.css'
import PriceWithLines from "./PriceWithLines";
import './../../Animation/tilt-in-top-1.css'

const Card = (props) => {
    return (<div>
        {props.type === 1 &&
            <div className={'Card-Container_type_1 tilt-in-top-1'}>
                <img className={'image_style_type_1'} src={props.image}/>
                <CardTitle title={props.title} type={1}/>
                <CardSubTitle type={1} subTitle={props.subTitle}/>
            </div>}
        {props.type === 2 &&
            <div>
                <p className={'top-header'}>{props.topHeader}</p>
                <div className={'Card-Container_type_2 tilt-in-top-1'}>
                    <img src={props.image}/>
                    <CardTitle title={props.title} type={2}/>
                    <div style={{height: '5vw', marginBottom: '5vw'}}>
                        <CardSubTitle type={2} subTitle={props.subTitle}/>
                    </div>
                    {props.icon ? <img className={'iconStyle'} src={props.icon} alt='icon'/> :
                        <div className={'iconStyle'}/>}
                    <PriceWithLines price={props.price}/>
                </div>
            </div>
    }
        {props.type === 3 &&
            <div className={'Card-Container_type_3 tilt-in-top-1'}>
                <img src={props.image}/>
                <CardTitle title={props.title} type={3}/>
            </div>
    }
    </div>)

}
export default Card
