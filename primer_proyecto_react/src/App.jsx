import {Card} from "./componentes/Card"
import './App.css'

function App() {
  const info = [
    { tittle: 'Card 1', description: 'descripcion de la card 1' },
    { tittle: 'Card 2', description: 'descripcion de la card 2' },
    { tittle: 'Card 3', description: 'descripcion de la card 3' },
  ]
  return (
    <>
      {info.map((card, index) => (
        <Card
          key={index}
          tittle={card.tittle}
          description={card.description}
        />
      ))}
    </>
  )
}

export default App
