import './SectionTitle.css'

const SectionTitle = (props) => {
    return (<p style={{
        marginTop: !props.withoutMargin && '10vw', marginBottom: !props.withoutMargin && '2.5rem'
    }}
               className={'Section-Label'}>
        {props.title}
    </p>)
}
export default SectionTitle
