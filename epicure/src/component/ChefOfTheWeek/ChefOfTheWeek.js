import {yosi_shitrit_image} from "../../utils/ImageManagement";
import './ChefOfTheWeek.css'
import {chef_of_the_week_paragraph} from "../../utils/DictioneryManagement";
import '../../Animation/roll-in-left.css'
import '../../Animation/text-focus-in.css'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const ChefOfTheWeek = () => {
    return (<div className={'Chef-Container'}>
       <AnimatedOnScroll animationIn="roll-in-left">
           <img className={'Chef_image'} src={yosi_shitrit_image} alt='yosi-image'/>
       </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="text-focus-in">
            <p className={'Chef-Paragraph'}>{chef_of_the_week_paragraph}</p>
        </AnimatedOnScroll>
    </div>)
}
export default ChefOfTheWeek
