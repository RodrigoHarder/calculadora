import { GoHistory } from "react-icons/go";
import useMostrarHistorico from "../../../hooks/useMostrarHistorico";
import Historico from "..";
import Botao from "../../Botao";
import "./AbrirHistorico.css"

const AbrirHistorico = () => {

    const { modalAberto, alternar } = useMostrarHistorico();

    return (
        <div className="display-historico">

            <Botao
                label={<GoHistory size={32} color="var(--cor-da-fonte)"/>}
                className="botao-historico"
                onClick={alternar}
            />
            {modalAberto && <Historico onClose={alternar}/>}
        </div>
    )
}

export default AbrirHistorico;