import './SectionTitle.css'
import '../../Animation/tracking-in-expand.css'

const SectionTitle = (props) => {
    return (<p style={{
        marginTop: props.marginTop && props.marginTop, marginBottom: props.marginBottom && props.marginBottom
    }}
               className={'Section-Label tracking-in-expand'}>
        {props.title}
    </p>)
}
export default SectionTitle
