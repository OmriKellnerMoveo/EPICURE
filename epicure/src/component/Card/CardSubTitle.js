import './CardSubTitle.css'
import '../../Animation/text-focus-in.css'
const CardSubTitle = (props) => {
    return (
        <p className={'Sub-title text-focus-in'}>{props.subTitle}</p>
    )
}
export default CardSubTitle
