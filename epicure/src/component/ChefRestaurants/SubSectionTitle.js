import './SubSectionTitle.css'

const SubSectionTitle = (props) => {
    const styles={
        container:{
            textAlign:props.alignLeft && 'start',
            marginLeft:props.alignLeft && '9vw'
        }
    }
    return (
        <div>
            <p style={styles.container} className={'SubSectionTitle-Container'}>{props.title}</p>
        </div>
    )
}
export default SubSectionTitle
