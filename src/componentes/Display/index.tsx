import Calculo from "../Calculo";
import AbrirHistorico from "../Historico/AbrirHistorico";
import AlterarTema from "../AlternarTema";
import "./Display.css";

const Display = () => {
    return (
        <>
            <div className="display-topo">
                <AlterarTema />
                <AbrirHistorico />
            </div>
            <Calculo />
        </>
    );
};

export default Display;
