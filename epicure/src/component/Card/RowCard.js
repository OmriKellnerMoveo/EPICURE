import Card from "./Card";
import React from "react";
import './RowCard.css'

const RowCard = (props) => {
    const styles = {
        container: {
            justifyContent: props.type === 3 ? 'start' : 'center', marginInline: props.type === 3 ? '9vw' : '2vw'
        }
    }
    return (<div>
            <div style={styles.container} className={'cards-row'}>
                {props.card_list.map((card) => {
                    return (<Card
                        key={card.title}
                        type={props.type}
                        image={card.image}
                        title={card.title}
                        subTitle={card.subTitle}
                        icon={card.Icon}
                        price={card.price}
                        topHeader={card.topHeader}
                    />)
                })}
            </div>
        </div>

    )
}
export default RowCard
