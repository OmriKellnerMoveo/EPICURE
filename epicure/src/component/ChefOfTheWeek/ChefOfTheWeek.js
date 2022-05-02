import {yosi_shitrit_image} from "../../utils/ImageManagement";
import './ChefOfTheWeek.css'
import {chef_of_the_week_paragraph} from "../../utils/DictioneryManagement";

const ChefOfTheWeek = () => {
    return (<div className={'Chef-Container'}>
        <img className={'Chef_image'} src={yosi_shitrit_image} alt='yosi-image'/>
        <p className={'Chef-Paragraph'}>{chef_of_the_week_paragraph}</p>

    </div>)
}
export default ChefOfTheWeek
