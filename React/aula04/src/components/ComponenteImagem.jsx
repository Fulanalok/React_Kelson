import React from "react";
import ChuuImg from '../assets/Chuu.jpeg'

const ComponenteImagem = () => {
    return (
        <div> 
<p> Textinho bacana </p>
        <img src='Chuu.jpeg' />
        <img src={ChuuImg} />
</div>
    )
}

export default ComponenteImagem