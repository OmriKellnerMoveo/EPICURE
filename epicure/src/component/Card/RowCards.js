import React, {useRef} from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import './Splide.css'
import Card from "./Card";

export default function (props) {
    const ref = useRef();
    return (<div className={props.type !== 3 ? 'Splide-container' : 'Splide-container_type_3'}>
            <Splide
                ref={ref}
                options={{
                    interval: 0,
                    arrows: false,
                    type: 'loop',
                    rewind: false,
                    autoScroll: false,
                    speed: 2000,
                    autoWidth: true,
                    perPage: 3,
                    perMove: 1,
                    gap: props.type !== 3 ? 20 : 15,
                    pagination: false,
                    breakpoints: {
                        623: {
                            //type 3 = 2.2 cards
                            //type 2 = 1.25 cards
                            //type 1= 1.6 cards
                            perPage: props.type === 3 ? 2.2 : props.type === 2 ? 1.25 : 1.6, perMove: 1, gap: 8,
                        },
                    }
                }}
            >
                {props.card_list.map(card => {
                    return (<SplideSlide key={card.title} className="slide">
                            <Card
                                key={card.title}
                                type={props.type}
                                image={card.image}
                                title={card.title}
                                subTitle={card.subTitle}
                                icon={card.Icon}
                                price={card.price}
                                topHeader={card.topHeader}
                            />
                        </SplideSlide>);
                })}
            </Splide>
        </div>);
}
