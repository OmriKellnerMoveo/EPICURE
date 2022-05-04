import './CardTitle.css'
import '../../Animation/text-focus-in.css'
const CardTitle = (props) => {
    const styles = {
        paragraph: {
            fontSize: props.type ===3 && '2.5vw'
        }
    }
    const dynamicClassName = props.type === 1?'Card-title-type-1':props.type === 2?'Card-title-type-2':'Card-title-type-3'

    return (
            <span style={styles.paragraph} className={`${dynamicClassName} text-focus-in`}>{props.title}</span>
    )
}
export default CardTitle
