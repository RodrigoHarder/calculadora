import { useRecoilValue } from "recoil";
import { displayState} from "../../state/atom";
import { resultSelector } from "../../state/selector";
import { FaEquals } from "react-icons/fa6";
import "./Calculo.css"

const Calculo = () =>{
    
    const display = useRecoilValue(displayState);
    const resultado = useRecoilValue(resultSelector);

    return(
        <div className="display-container">
        <span className="display-input">{display}</span>
        <span className="display-resultado">
            <FaEquals size={24} />
            {resultado}
        </span>
    </div>
    )
}

export default Calculo