// import {yosi_shitrit_image} from "../../utils/ImageManagement";
import './ChefOfTheWeek.css'
import {chef_of_the_week_paragraph} from "../../utils/DictioneryManagement";
import '../../Animation/roll-in-left.css'
import '../../Animation/text-focus-in.css'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import {yosi_shitrit_image} from "../../utils/ImageManagement";
// src={yosi_shitrit_image}
const images ={yosi_shitrit_image}
const ChefOfTheWeek = (props) => {
    return (<div className={'Chef-Container'}>
            <AnimatedOnScroll animationIn="roll-in-left">
                {props.chef['Chef'] &&   <img className={'Chef_image'} src={images[props.chef['Chef']['image']]} alt='Chef'/>}
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="text-focus-in">
                {props.chef['Chef']&&<p className={'Chef-Paragraph'}>{props.chef['Chef']['description']}</p>}
            </AnimatedOnScroll>
        </div>)
}
export default ChefOfTheWeek
