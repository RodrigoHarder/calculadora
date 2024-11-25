import { useRecoilState } from "recoil";
import { historicoState } from "../../state/atom";
import { FaXmark } from "react-icons/fa6"
import Botao from "../Botao";
import "./Historico.css";
import "../../estilos/global.css";

interface HistoricoProps {
    onClose: () => void;
}

const Historico = ({ onClose }: HistoricoProps) => {
    const [historico, setHistorico] = useRecoilState(historicoState);

    const limparHistorico = () => {
        setHistorico([]);
    };

    return (
        <div className="modal">
            <div className="conteudo-modal">
                <Botao
                    label={<FaXmark size={24} color="var(--cor-da-fonte)" />}
                    className="botao-fechar"
                    onClick={onClose}
                />
                <h3>Histórico</h3>
                {historico.slice(-5).map((operacao, index) => (
                    <div key={index} className="calculos">
                        <span>{operacao}</span>
                    </div>
                ))}
                <Botao
                    label="Limpar Histórico"
                    onClick={limparHistorico}
                    className="botao-limpar"
                />
            </div>
        </div>
    );
};

export default Historico;