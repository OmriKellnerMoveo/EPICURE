import './AboutUsButtons.css'
import AboutUsBtn from "./AboutUsBtn";
import {appleIcon, googlePlayIcon} from "../../utils/ImageManagement";
import {app_store_str, download_on_the_str, get_it_on_str, google_play_str} from "../../utils/DictioneryManagement";

const AboutUsButtons = () => {
    return (
        <div className={'About-Us-Buttons-Container'}>
            <AboutUsBtn icon={appleIcon} title={download_on_the_str} subTitle={app_store_str}/>
            <AboutUsBtn icon={googlePlayIcon} title={get_it_on_str} subTitle={google_play_str}/>
        </div>)
}
export default AboutUsButtons
