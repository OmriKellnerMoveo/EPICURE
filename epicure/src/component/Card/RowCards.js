import React, {useRef} from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import './Splide.css'
import Card from "./Card";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

export default function (props) {
    const ref = useRef();
    return (
        <div className={props.type !== 3 ? 'Splide-container' : 'Splide-container_type_3'}>
            <AnimatedOnScroll animationIn="tilt-in-top-1">

            <Splide
                ref={ref}
                options={{
                    interval: 0,
                    arrows: true,
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
                            perPage: props.type === 3 ? 2.2 : props.type === 2 ? 1.25 : 1.6, perMove: 1, gap: 8,
                        },
                    }
                }}
            >
                {props.card_list.map(card => {
                    if (props.type===2 && !card['signature_dish'])
                        return (<div></div>)
                    else
                    return (

                        <SplideSlide key={card.name} className="slide">
                            <Card
                                key={card.name}
                                type={props.type}
                                image={props.type===1?card.image:props.type===2?card['signature_dish'].image:card.image}
                                title={props.type===1?card.name:props.type===2?card['signature_dish'].name:card.name}
                                subTitle={props.type===1?card['Chef'].name: props.type===2 && card['signature_dish'].description}
                                icon={props.type===2 && card['signature_dish'].tags}
                                price={props.type===2 && card['signature_dish'].price}
                                topHeader={props.type===2 && card.name}
                            />
                        </SplideSlide>);
                })}
            </Splide>
            </AnimatedOnScroll>
        </div>);
}
