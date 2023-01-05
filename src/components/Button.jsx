export default function Button(props) {
	return (
    	<button className={props.class} onClick={props.clicktHandler}>
           {props.title}
           {props.icon}
           {props.fontSize}
        </button>
    )
}