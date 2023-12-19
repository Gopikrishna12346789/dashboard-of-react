import React from 'react'
import { useStateContext } from '../Context/ContextProvider'

function Header({category,title}) {
  const {currentColor}=useStateContext()
  return (

    <div className='mb-10'>
        <p className='text-gray-700'>
          {category}
        </p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900" style={{color: currentColor}}>{title}</p>
    </div>
  )
}

export default Header