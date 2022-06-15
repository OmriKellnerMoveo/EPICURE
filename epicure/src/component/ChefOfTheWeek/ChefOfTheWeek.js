import './ChefOfTheWeek.css'
import {chef_of_the_week_paragraph} from "../../utils/DictioneryManagement";
import '../../Animation/roll-in-left.css'
import '../../Animation/text-focus-in.css'
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import {user_icon, yosi_shitrit_image} from "../../utils/ImageManagement";
const ChefOfTheWeek = (props) => {
    return (<div className={'Chef-Container'}>
            <AnimatedOnScroll animationIn="roll-in-left">
                {(props.chef['Chef'] &&
                    props.chef['Chef']['image']!=='no' )?
                    <img className={'Chef_image'} src={props.chef['Chef']['image']} alt='Chef'/>
                   : <img className={'Chef_image user_icon'} src={user_icon} alt='Chef'/>}
                <div className={'Opacity'}>
                    <span className={'textChefOfTheWeekName'}>{props.chef['Chef'] && props.chef['Chef']['name']}</span>
             </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="text-focus-in">
                {props.chef['Chef']&&<p className={'Chef-Paragraph'}>{props.chef['Chef']['description']}</p>}
            </AnimatedOnScroll>
        </div>)
}
export default ChefOfTheWeek
