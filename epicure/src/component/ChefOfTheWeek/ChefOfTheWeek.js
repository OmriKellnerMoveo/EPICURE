import {yosi_shitrit_image} from "../../utils/ImageManagement";
import './ChefOfTheWeek.css'
import {chef_of_the_week_paragraph} from "../../utils/DictioneryManagement";
import '../../Animation/roll-in-left.css'
import '../../Animation/text-focus-in.css'

const ChefOfTheWeek = () => {
    return (<div className={'Chef-Container'}>
        <img className={'Chef_image  roll-in-left'} src={yosi_shitrit_image} alt='yosi-image'/>
        <p className={'Chef-Paragraph text-focus-in'}>{chef_of_the_week_paragraph}</p>
    </div>)
}
export default ChefOfTheWeek
