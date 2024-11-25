import { useRecoilState } from "recoil";
import { mostrarHistorico } from "../state/atom";

const useMostrarHistorico = () => {
  const [modalAberto, setModalAberto] = useRecoilState(mostrarHistorico);

  const alternar = () => setModalAberto((prev) => !prev);

  return { modalAberto, alternar };
};

export default useMostrarHistorico;