import React from 'react'
import Adicao from './components/Adicao'
import Divisao from './components/Divisao'
import Multiplicacao from './components/multiplicacao'
import Subtracao from './components/subtracao'

const App = () => {
  return (
    <div>
      <Adicao num1 ={2} num2 ={2} />
      <Divisao num3 ={6} num4 ={2} />
      <Multiplicacao num5 ={5} num6 ={2} />
      <Subtracao num7 ={8} num8 ={2} />
    </div>
  )
}

export default App
