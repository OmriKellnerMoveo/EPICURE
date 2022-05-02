import './CardTitle.css'

const CardTitle = (props) => {
    const styles = {
        container: {
            width: props.type === 3 && 224,
            height: props.type === 3 && 133
        },
        paragraph: {
            fontSize: props.type == 3 ? '3vw' : '4vw'
        }
    }
    return (
        <div style={styles.container}>
            <p style={styles.paragraph} className={'Card-title getFontSize'}>{props.title}</p>
        </div>
    )
}
export default CardTitle
