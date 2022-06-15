import './CardTitle.css'
import '../../Animation/text-focus-in.css'
const CardTitle = (props) => {
    const dynamicClassName = props.type === 1?'Card-title-type-1':props.type === 2?'Card-title-type-2':'Card-title-type-3'

    return (
            <span className={`${dynamicClassName} text-focus-in`}>{props.title}</span>
    )
}
export default CardTitle
