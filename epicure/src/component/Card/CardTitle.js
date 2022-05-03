import './CardTitle.css'

const CardTitle = (props) => {
    const styles = {
        paragraph: {
            fontSize: props.type ===3 && '2.5vw'
        }
    }
    return (
            <span style={styles.paragraph} className={'Card-title'}>{props.title}</span>
    )
}
export default CardTitle
