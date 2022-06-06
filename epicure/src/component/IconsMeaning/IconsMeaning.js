import './IconsMeaning.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import {meaning_of_icons, Spicy_str, Vegan_str, Vegitarian_str} from "../../utils/DictioneryManagement";
import {Spicy, Vegan, Vegetarian} from "../../utils/ImageManagement";
import IconWithTitle from "./IconWithTitle";

const IconsMeaning = () => {
    return (
        <div className={'iconMeaningContainer'}>
            <SectionTitle title={meaning_of_icons}/>
            <div className={'container-icons'}>
                <IconWithTitle title={Vegitarian_str} image={Vegetarian}/>
                <IconWithTitle title={Spicy_str} image={Spicy}/>
                <IconWithTitle title={Vegan_str} image={Vegan}/>
            </div>
        </div>
    )
}
export default IconsMeaning
