import { useEffect, useState } from "react"
import { redondea } from "../../lib"

function Saldo({importe}) {

    const [claseParaElSaldo, setClaseParaElSaldo] = useState("saldado")
    const [imagen ] = useState("")

    useEffect(
        ()=>{
            if (importe < 0) { 
                setClaseParaElSaldo("deudor")
               
            }
            if (importe === 0) {
                setClaseParaElSaldo("saldado")
                
            }
            if (importe > 0) {
                setClaseParaElSaldo("acreedor")
               
            }
        },
        [importe]
    )

    return (
        <>
            <span className={claseParaElSaldo}>
                {imagen}
                {redondea(importe,2)}€
            </span>
        </>
    )
}

export default Saldo