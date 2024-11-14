import React from 'react'
import styles from './Campanha.module.css' 

const Campanha = (props) => {

    function defineMensagem(mes) {
        if (mes === "setembro") {
            return "Prevencao ao suicidio"
        }   else if (mes === "outubro") {
            return "conscientizacao sobre o cancer de mama"
        }   else if (mes === "novembro") {
            return "prevencao de combate ao cancer de prostata"
        }
    }
    
    function defineCorDeFundo(mes) {
            if (mes === "setembro") {
                return styles.setembro
            }   else if (mes === "outubro") {
                return styles.outubro 
            }   else if (mes === "novembro") {
                return styles.novembro
            }
    }
  return (
    <div className={defineCorDeFundo(props.mes)}>
        {defineMensagem(props.mes)}
    </div>
  )
}

export default Campanha