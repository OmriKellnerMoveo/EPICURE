import CardTitle from "./CardTitle";
import {ils_icon} from "../../utils/ImageManagement";
import React from "react";
import CardSubTitle from "./CardSubTitle";
import './Card.css'

const Card = (props) => {
    const styles = {
        container_type_2: {
            height: '50vw'
        }
    }
    return (
        <div>
            {props.type === 1 &&
                <div className={'Card-Container'}>
                    <img src={props.image} className={'Img-style_type_1'}/>
                    <CardTitle title={props.title}/>
                    <CardSubTitle subTitle={props.subTitle}/>
                </div>}
            {props.type === 2 &&
                <div>
                    <p className={'top-header'}>{props.topHeader}</p>
                    <div style={styles.container_type_2} className={'Card-Container'}>
                        <img src={props.image} className={'Img-style_type_2'}/>
                        <CardTitle title={props.title}/>
                        <div style={{height: '10vw', marginBottom: '5vw'}}>
                            <CardSubTitle subTitle={props.subTitle}/>
                        </div>

                        {props.icon ? <img className={'iconStyle'} src={props.icon} alt='icon'/> :
                            <div className={'iconStyle'}/>}
                        <div className={'bottom-card'}>
                            <div className={'line'}/>
                            <div className={'price-container'}>
                                <img className={'ils'} src={ils_icon} alt='ils-icon'/>
                                <span className={'price'}>{props.price}</span>
                            </div>
                            <div className={'line'}/>
                        </div>

                    </div>
                </div>}
            {props.type === 3 &&
                <div className={'Card-Container'}>
                    <img src={props.image} className={'Img-style_type_3'}/>
                    <CardTitle title={props.title} type={3}/>
                </div>
            }
        </div>)

}
export default Card
