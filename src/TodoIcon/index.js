import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css'


const inconTypes ={
    "check": (color) => <CheckSVG 
    className = "Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG 
    className = "Icon-svg" fill={color}/>,

}

function TodoIcon({type, color, onClick}){
    return(
        <span
          className={`Icon-container 
          Icon-container-${type}`}
          onClick={onClick}
          >
            {inconTypes[type](color)}

        </span>
    )
}
export {TodoIcon}