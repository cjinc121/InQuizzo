import './Header.css'
import {RiLoginBoxFill} from "react-icons/ri"
import {IoIosStats} from "react-icons/io"

const Header=()=>{
return <div className="header">
  <div className='brand-name'>InQuizzo</div>
  <div className='header-buttons'><IoIosStats className='icon'/><RiLoginBoxFill className='icon'/></div>
</div>
}
export {Header}