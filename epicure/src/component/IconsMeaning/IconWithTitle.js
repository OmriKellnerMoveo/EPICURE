import './IconWithTitle.css'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const IconWithTitle = (props) => {
    return (
        <div>
            <AnimatedOnScroll animationIn="tilt-in-top-1">
            <img className={'iconSize'} src={props.image} alt='icon'/>
            </AnimatedOnScroll>
            <p className={'IconNameText'}>{props.title}</p>
        </div>

    )
}
export default IconWithTitle
