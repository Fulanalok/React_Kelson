import React from 'react'

function EstouConseguindoAprenderReact(props) {
    const estouConseguindo = props.estouConseguindo;
    let estudos;

    if (estouConseguindo) {
        estudos = <h1> Estou indo bem</h1>;
    } else {
        estudos = <h1> Preciso estudar mais </h1>
    }


  return (
    <div>
      {estudos}
    </div>
  )
}

export default EstouConseguindoAprenderReact
