import Card from "./Card";
import React from "react";
import './RowCard.css'

const RowCard = (props) => {
    return (
        <div>
            <div className={'cards-row Scrolling-Cards'}>
                {props.card_list.map((card) => {
                    return (
                        <Card
                            key={card.title}
                            type={props.type}
                            image={card.image}
                            title={card.title}
                            subTitle={card.subTitle}
                            icon={card.Icon}
                            price={card.price}
                        />
                    )
                })}
            </div>
            {/*<br/>*/}
            {/*<div className={'cards-row Scrolling-Cards'}>*/}
            {/*    {RowCard_2.map((card) => {*/}
            {/*        return (*/}
            {/*            <Card key={card.title} image={card.image} title={card.title} subTitle={card.subTitle}/>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>

    )
}
export default RowCard
