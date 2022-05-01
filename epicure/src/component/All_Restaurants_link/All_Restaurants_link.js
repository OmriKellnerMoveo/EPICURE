import {two_arrows_icon} from "../../utils/ImageManagement";
import {All_Restaurants_str} from "../../utils/DictioneryManagement";
import './All_Restaurants_link.css'

const All_Restaurants_link = () => {
    return (<div className={'paragraph_container'}>
            <span className={'All-Restaurants'}>{All_Restaurants_str}</span>
            <img src={two_arrows_icon} alt='two-arrows'/>
        </div>)
}
export default All_Restaurants_link
