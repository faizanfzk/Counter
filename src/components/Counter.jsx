import  { useState} from "react"
import "./counter.css"
function Counter(){

    const [counter,setCounter]=useState(0);
const handleChange=(value)=>{
    setCounter(counter+value)

}
const handleChain=(value)=>{
    setCounter(counter*value)
}
return(
    <div>
        <h3 className={`${counter%2===0 ? "greenText":"redText"}`}>Counter:{counter}</h3>

    <button onClick={()=>handleChange(1)}>ADD 1</button>
    <button onClick={()=>handleChange(-1)}>Subtract 1</button>
<button onClick={()=>handleChain(2)}>Double</button>

    </div>
)
}

export default Counter