import { useState } from 'react'
import Library from './Componets/lista_livros'
import './App.css'
import TravelList from './Componets/lista_cidades'
import HobbiesList from './Componets/lista_hobbies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Library/>
    <TravelList/>
    <HobbiesList/>
  
  </>
)
}
export default App
