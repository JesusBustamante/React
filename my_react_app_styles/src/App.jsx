import { Card } from "./componentes/Card/Card"
import { Button } from "./componentes/Button/Button"
import styles from "../src/componentes/Card/Card.module.scss"

function App() {

  const info = [
    { nombre: 'Spider-Man1', estatura: '1.75 cm', edad: '18 años' },
    { nombre: 'Spider-Man2', estatura: '1.75 cm', edad: '18 años' },
    { nombre: 'Spider-Man3', estatura: '1.75 cm', edad: '18 años' },
  ]
  return (
    <>
      <div className={styles.cards_wrapper}>


        {info.map((card, index) => (
          <Card
            key={index}
            nombre={card.nombre}
            estatura={card.estatura}
            edad={card.edad}
          />
        ))}
      </div>

      <Button><p>Gris</p></Button>
      <Button blue ><p>Azul</p></Button>
    </>
  )
}

export default App
