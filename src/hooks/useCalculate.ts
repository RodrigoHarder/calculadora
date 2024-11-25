import { useRecoilState, useSetRecoilState} from "recoil";
import { displayState, historicoState } from "../state/atom";


const useCalculate = () => {
  const [display, setDisplay] = useRecoilState(displayState);
  const setHistorico = useSetRecoilState(historicoState);

  const adicionarAoDisplay = (value: string) => {
    setDisplay((prev) => (prev === "0" && value !== "." ? value : prev + value));
  };

  const limparDisplay = () => {
    setDisplay("0");
  }

  const alternarSinal = () => {
    setDisplay((prev) => (prev.charAt(0) === "-" ? prev.slice(1) : `-${prev}`));
  };

  const calcularPorcentagem = () => {
    setDisplay((prev) => (parseFloat(prev) / 100).toString());
  };

  const calcularResultado = () => {
    const resultado = eval(display.replace("%", "/100"));
    setDisplay(resultado.toString());
    setHistorico((prevHistorico) => [...prevHistorico, `${display} = ${resultado}`]);
  };

  const manipularOperador = (operator: string) => {
    const ultimoCaracter = display[display.length - 1];
    if (["+", "-", "*", "/"].includes(ultimoCaracter)) {
      setDisplay((prev) => prev.slice(0, -1) + operator);
    } else {
      setDisplay((prev) => prev + operator);
    }
  };

  return {
  adicionarAoDisplay,
  limparDisplay,
  alternarSinal,
  calcularPorcentagem,
  calcularResultado,
  manipularOperador
  };
};

export default useCalculate;
