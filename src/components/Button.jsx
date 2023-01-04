export default function Button(props) {
	return (
    	<button className="btn" onClick={props.clicktHandler}>
           {props.title}
           {props.icon}
           {props.fontSize}
        </button>
    )
}