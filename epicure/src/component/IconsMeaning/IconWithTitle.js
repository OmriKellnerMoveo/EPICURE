import './IconWithTitle.css'

const IconWithTitle = (props) => {
    return (
        <div>
            <img className={'iconSize'} src={props.image} alt='icon'/>
            <p>{props.title}</p>
        </div>

    )
}
export default IconWithTitle
