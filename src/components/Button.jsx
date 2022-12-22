export default function Button({
  width,
  height,
  backgroundColor,
  color,
  border,
  borderColor,
  onClick,
  fontSize,
  title,
  icon,}) {
	return (
    	<button className="btn" onClick={onClick}>
           {title}
           {icon}
           {fontSize}
        </button>
    )
}