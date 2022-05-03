import './CardTitle.css'
import '../../Animation/text-focus-in.css'
const CardTitle = (props) => {
    const styles = {
        paragraph: {
            fontSize: props.type ===3 && '2.5vw'
        }
    }
    return (
            <span style={styles.paragraph} className={'Card-title text-focus-in'}>{props.title}</span>
    )
}
export default CardTitle
