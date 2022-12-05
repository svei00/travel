import { TbClick } from 'react-icons/tb'
export default function Button({
  width,
  height,
  backgroundColor,
  color,
  border,
  borderColor,
  fontSize,
  title,}) {
	return (
    	<button className="btn">
           {title}
           <TbClick/>
        </button>
    )
}