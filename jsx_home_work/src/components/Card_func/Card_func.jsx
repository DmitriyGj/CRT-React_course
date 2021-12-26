import {useState} from 'react'
import './Card_func.css'
function CardFunc(props){
    const [show, setShow] = useState(false);

    const infoBlock = <div>
            <img src = {props.imgSrc} alt={props.imgSrc} />
            <h3>{props.info}</h3>
</div>
    return(<div className ='Card_func'>
        <h1>It is {props.name}</h1>
        {show && infoBlock }
        <button onClick={()=> setShow(!show )}>
            {show ? 'Click to hide info':'Click to show info'}
        </button>       
    </div>);
}

export default CardFunc;