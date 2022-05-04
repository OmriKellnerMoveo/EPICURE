import './CardSubTitle.css'
import '../../Animation/text-focus-in.css'
const CardSubTitle = (props) => {
    const dynamicClassName = props.type === 1?'Sub-title-type-1':'Sub-title-type-2'
    return (
        <p className={`${dynamicClassName} text-focus-in`}>{props.subTitle}</p>
    )
}
export default CardSubTitle
