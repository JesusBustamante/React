import { Counter } from './componentes/Counter'
import { ToggleButton } from './componentes/ToggleButton'
import { NameForm } from './componentes/NameForm'
import { CounterWithEffect } from './componentes/CounterWithEffect'
import './App.css'

function App() {

  return (
    <>
      <div id='app'>
        <Counter />
        <ToggleButton />
        <NameForm />
        <CounterWithEffect />
      </div>
    </>
  )
}

export default App
