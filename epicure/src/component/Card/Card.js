import CardTitle from "./CardTitle";
import React from "react";
import CardSubTitle from "./CardSubTitle";
import './Card.css'
import PriceWithLines from "./PriceWithLines";
import './../../Animation/tilt-in-top-1.css'
import {
    claro_img,
    garbanzoFriyoImage, kitchenMarketImage,
    lumina_img, mashyaImage, onzaImage,
    padKi_image,
    smokedPizzaImage,
    Spicy,
    tiger_Lilly_img,
    Vegan, Vegetarian
} from "../../utils/ImageManagement";

const Images ={
    claro_img,
    garbanzoFriyoImage, kitchenMarketImage,
    lumina_img, mashyaImage, onzaImage,
    padKi_image,
    smokedPizzaImage,
    Spicy,
    tiger_Lilly_img,
    Vegan,
    Vegetarian
}

const Card = (props) => {
    return (<div>
        {props.type === 1 &&
            <div className={'Card-Container_type_1 tilt-in-top-1'}>
                <img className={'image_style_type_1'} src={props.image}/>
                <CardTitle title={props.title} type={1}/>
                <CardSubTitle type={1} subTitle={props.subTitle}/>
            </div>}
        {props.type === 2 &&
            <div className={'card_2ContainerStyle'}>
                <p className={'top-Title'}>{props.topHeader}</p>
                <div className={'Card-Container-type-2 tilt-in-top-1'}>
                    <img src={props.image}/>
                        <CardTitle title={props.title} type={2}/>
                    <div>
                        <CardSubTitle type={2} subTitle={props.subTitle}/>
                    </div>
                    <div className={'iconContainers'} >
                    {props.icon ?
                        <div>
                            {props.icon.map((tag)=>{
                         return   <img key={tag} className={'iconStyle'} src={Images[tag]} alt='icon'/>
                        })}
                         </div>
                        :
                        <div className={'demIconStyle'}></div>}
                    </div>
                    <PriceWithLines price={props.price}/>
                </div>
            </div>
    }
        {props.type === 3 &&
            <div className={'Card-Container_type_3 tilt-in-top-1'}>
                <img src={props.image} alt='Chefs restaurants'/>
                <CardTitle title={props.title} type={3}/>
            </div>
    }
    </div>)

}
export default Card
