export default function Button({
  width,
  height,
  backgroundColor,
  color,
  border,
  borderColor,
  fontSize,
  title,
  icon,}) {
	return (
    	<button className="btn">
           {title}
           {icon}
           {fontSize}
        </button>
    )
}