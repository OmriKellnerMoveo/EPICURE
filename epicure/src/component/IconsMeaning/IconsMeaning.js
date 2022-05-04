import './IconsMeaning.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import {meaning_of_icons, Spicy_str, Vegan_str, Vegitarian_str} from "../../utils/DictioneryManagement";
import {spicyIcon, veganIcon, vegetarianIcon} from "../../utils/ImageManagement";
import IconWithTitle from "./IconWithTitle";

const IconsMeaning = () => {
    return (
        <div className={'iconMeaningContainer'}>
            <SectionTitle title={meaning_of_icons}/>
            <div className={'container-icons'}>
                <IconWithTitle title={Vegitarian_str} image={vegetarianIcon}/>
                <IconWithTitle title={Spicy_str} image={spicyIcon}/>
                <IconWithTitle title={Vegan_str} image={veganIcon}/>
            </div>
        </div>
    )
}
export default IconsMeaning
