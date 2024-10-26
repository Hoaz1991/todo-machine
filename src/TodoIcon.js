import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';


const inconTypes ={
    "check": <CheckSVG/>,
    "delete": <DeleteSVG/>,

}

function TodoIcon({type}){
    return(
        <span
          className={`Icon Icon-svg Icon-${type}`}
          >
            {inconTypes[type]}

        </span>
    )
}
export {TodoIcon}