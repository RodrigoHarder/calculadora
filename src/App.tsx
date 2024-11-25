import { RecoilRoot } from 'recoil'
import './App.css'
import Teclado from './componentes/Teclado'
import Display from './componentes/Display'

function App() {
  return (
    <RecoilRoot>
      <div className='calculadora'>
        <Display />
        <Teclado />
      </div>
    </RecoilRoot>
  )
}

export default App
