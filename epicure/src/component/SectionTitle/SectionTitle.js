import './SectionTitle.css'
import '../../Animation/tracking-in-expand.css'

const SectionTitle = (props) => {
    return (<p style={{
        marginTop: !props.withoutMargin && '10vw', marginBottom: !props.withoutMargin && '2.5rem'
    }}
               className={'Section-Label tracking-in-expand'}>
        {props.title}
    </p>)
}
export default SectionTitle
