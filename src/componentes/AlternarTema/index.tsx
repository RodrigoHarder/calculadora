import { useRecoilState } from 'recoil';
import { temaState } from '../../state/atom';
import Botao from '../Botao';
import { FiSun, FiMoon } from 'react-icons/fi'
import './AlternarTema.css'
import '../../estilos/global.css'

const AlterarTema: React.FC = () => {
    const [tema, setTema] = useRecoilState(temaState);

    const alterarTema = () => {
        const novoTema = tema === 'light' ? 'dark' : 'light';
        setTema(novoTema);
        document.body.className = novoTema === 'dark' ? 'dark-theme' : '';
        
    };

    return (

        <div className='mudar-tema'>
            <Botao
                label={<FiSun size={24} color='var(--cor-da-fonte)'/>}
                onClick={alterarTema}
                className='botao-tema-light'
            />
            <Botao
                label={<FiMoon size={24} color='var(--cor-da-fonte)'/>}
                onClick={alterarTema}
                className='botao-tema-dark'
            />
        </div>

    );
};

export default AlterarTema;

