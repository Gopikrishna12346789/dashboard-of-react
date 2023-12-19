import React from 'react'
import { useStateContext } from '../Context/ContextProvider'

function Button({bgColor,color,size,text,borderRadius,close}) {
  const{handleClick}=useStateContext()
  return (
    <button type='button' style={{background:bgColor,color,borderRadius}} onClick={()=>handleClick(close)} className={`text-${size} p-3 hover:drop-shadow-xl `}>
            {text}
    </button>
  )
}

export default Button