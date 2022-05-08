import './SectionTitle.css'
import '../../Animation/tracking-in-expand.css'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const SectionTitle = (props) => {
    return (<AnimatedOnScroll animationIn="tracking-in-expand">
        <p style={{
            marginTop: props.marginTop && props.marginTop, marginBottom: props.marginBottom && props.marginBottom
        }}
           className={'Section-Label'}>
            {props.title}
        </p></AnimatedOnScroll>)
}
export default SectionTitle
