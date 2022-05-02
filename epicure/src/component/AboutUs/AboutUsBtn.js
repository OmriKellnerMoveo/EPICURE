import {Button} from "react-bootstrap";
import './AboutUsBtn.css'

const AboutUsBtn = (props) => {
    return (
        <Button type={"button"} className={'AboutUsBtnContainer'}>
            <img className={'Os-icon'} src={props.icon} alt='icon'/>
            <div className={'Child-Container'}>
                <span className={'Title-style'}>{props.title}</span>
                <span className={'Title-style Sub-title-Style'}>{props.subTitle}</span>
            </div>
        </Button>
    )
}
export default AboutUsBtn
