import "./Teclado.css"
import Botao from "../Botao"
import useCalculate from "../../hooks/useCalculate";
import { FaPercent, FaDivide, FaPlus, FaMinus, FaXmark, FaEquals, FaPlusMinus } from "react-icons/fa6";

const Teclado: React.FC = () => {

    const {
        adicionarAoDisplay,
        limparDisplay,
        alternarSinal,
        calcularPorcentagem,
        calcularResultado,
        manipularOperador
    } = useCalculate();

    return (
        <div className="teclado">
            <div className="organizacao-teclado">
                <div>
                    <div className="lista-funcionalidades">
                        <Botao className="botao funcionalidades" label="AC" onClick={limparDisplay} />
                        <Botao className="botao funcionalidades" label={
                            <div className="operacao">
                                <FaPlusMinus size={24} />
                            </div>
                        } onClick={alternarSinal} />
                        <Botao className="botao funcionalidades" label={
                            <div className="operacao">
                                <FaPercent size={24} />
                            </div>
                        } onClick={calcularPorcentagem} />
                    </div>

                    <div className="lista-numeros">
                        <Botao className="botao numeros" label="1" onClick={() => adicionarAoDisplay("1")} />
                        <Botao className="botao numeros" label="2" onClick={() => adicionarAoDisplay("2")} />
                        <Botao className="botao numeros" label="3" onClick={() => adicionarAoDisplay("3")} />
                        <Botao className="botao numeros" label="4" onClick={() => adicionarAoDisplay("4")} />
                        <Botao className="botao numeros" label="5" onClick={() => adicionarAoDisplay("5")} />
                        <Botao className="botao numeros" label="6" onClick={() => adicionarAoDisplay("6")} />
                        <Botao className="botao numeros" label="7" onClick={() => adicionarAoDisplay("7")} />
                        <Botao className="botao numeros" label="8" onClick={() => adicionarAoDisplay("8")} />
                        <Botao className="botao numeros" label="9" onClick={() => adicionarAoDisplay("9")} />
                        <Botao className="botao numeros" label="." onClick={() => adicionarAoDisplay(".")} />
                        <Botao className="botao numeros" label="0" onClick={() => adicionarAoDisplay("0")} />
                        <Botao className="botao numeros" label="00" onClick={() => adicionarAoDisplay("00")} />
                    </div>
                </div>

                <div className="lista-operadores">
                    <Botao className="botao operador" label={
                        <div className="operacao">
                            <FaDivide size={24} />
                        </div>
                    } onClick={() => manipularOperador("/")} />
                    <Botao className="botao operador" label={
                        <div className="operacao">
                            <FaXmark size={24} />
                        </div>
                    } onClick={() => manipularOperador("*")} />

                    <Botao className="botao operador" label={
                        <div className="operacao">
                            <FaMinus size={24} />
                        </div>
                    } onClick={() => manipularOperador("-")} />

                    <Botao className="botao operador" label={
                        <div className="operacao">
                            <FaPlus size={24} />
                        </div>
                    } onClick={() => manipularOperador("+")} />
                    <Botao className="botao operador" label={
                        <div className="operacao">
                            <FaEquals size={24} />
                        </div>
                    } onClick={calcularResultado} />
                </div>
            </div>

            <div className="divisor"></div>
        </div >
    )
}

export default Teclado
