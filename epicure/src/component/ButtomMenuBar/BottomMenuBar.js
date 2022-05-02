import './BottomMenuBar.css'
import {contact_us_str, privacy_policy_str, term_of_use_str} from "../../utils/DictioneryManagement";

const BottomMenuBar = () => {
    return (

        <div className={'ButtonMenuBar-Container'}>
            <span className={'Link-Style'}>{contact_us_str}</span>
            <span className={'Link-Style'}>{term_of_use_str}</span>
            <span className={'Link-Style'}>{privacy_policy_str}</span>
        </div>
    )
}
export default BottomMenuBar
