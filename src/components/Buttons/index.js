
import { Context } from "../../App"
import "./style.css"

export default function Buttons({estado}){



return(

<Context.Consumer>

{({Luz, setLuz})=>(

<button className="buttons" onClick={()=>{ 

const novoEstado = (Luz === "acesso" ? "apagado" :"acesso");
setLuz(novoEstado)

}}>

{estado = Luz}

</button>

)}

</Context.Consumer>
)

}