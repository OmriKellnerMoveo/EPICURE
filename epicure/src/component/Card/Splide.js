import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import './Splide.css'
import Card from "./Card";

export default function(props) {
    const ref = useRef();
    return (
        <div className={props.type!==3 ?'Splide-container':'Splide-container_type_3'}>
            <Splide
                ref={ref}
                options={{
                    interval: 0,
                    arrows:false,
                    type: 'loop',
                    rewind: false,
                    autoScroll: 'false',
                    speed: 2000,

                    autoWidth:false,
                    perPage: 3,
                    perMove: 3,
                    gap: '2vw',
                    // padding: "3rem",
                    pagination: false,
                    breakpoints: {
                        623: {
                            // perPage: props.type ===3 ?2:1,
                            // perMove: props.type ===3 ?2:1,

                            // gap:2
                            // padding:"10vw",
                            // gap:"1vw"
                        },
                        // 935: {
                        //     perPage: 3,
                        //     perMove: 3
                        // },
                        // 1247: {
                        //     perPage: 3,
                        //     perMove: 3
                        // }
                    }
                }}
                // onMounted={() => {
                //     console.log("mounted");
                // }}
                // onUpdated={() => {
                //     console.log("updated");
                // }}
                // onMoved={() => {
                //     console.log("moved");
                // }}
                // onVisible={(splide, slide) => {
                //     console.log("visible", slide.index);
                // }}
            >
                {props.card_list.map(card => {
                    return (
                        <SplideSlide key={card.title} className="slide">
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
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}
