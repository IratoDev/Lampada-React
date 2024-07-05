import { Context } from "../../context/Context";
import { useContext } from "react";


export default function Buttons(){

const {dispatch} = useContext(Context);

const Style ={

backgroundColor:"#333131",
padding:"2em",
borderRadius:"20px",
color: "#fff",
border: "none"
}

return(

<>
<button style={Style} onClick={()=> dispatch({type:"acender"}) }>acender</button>

<button style={Style} onClick={()=> dispatch({type:"apagar"})}>apagar</button>
</>

)

}