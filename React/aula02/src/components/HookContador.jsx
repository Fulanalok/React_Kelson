import React from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementarContador() {
        setContador(contador+1)
    }
    
  return (
    <div>HookContador</div>
  )
}

export default HookContador