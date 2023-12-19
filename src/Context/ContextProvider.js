import React, { createContext,useContext ,useState} from 'react'

const StateContext=createContext()

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false

  
}





export  const ContextProvider=({children})=>{
    const [activeMenu,setActiveMenu]=useState(true)
    const[isClicked,setisClicked]=useState(initialState)

    const[screenSize,setscreenSize]=useState()
     const[currentColor,setCurrentColor]=useState('#03c9D7')
     const[currentMode,setCurrentMode]=useState('Light')
     const[themeSettings,setThemeSettings]=useState(false)
     
     const setMode=(e)=>{
      setCurrentMode(e.target.value)

      localStorage.setItem('themeMode',e.target.value)
     }

     const setColor= (color)=>{
      setCurrentColor(color)
      localStorage.setItem('color',color)
      setThemeSettings(false)
     }

    
    function handleClick(text){
        
        setisClicked((prev)=>({...prev,[text]:!prev[text]}))
           // setisClicked({...initialState,[text]:true})
    console.log(isClicked)
   
  }
   return( 
     <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setisClicked,handleClick,screenSize,setscreenSize ,currentColor,setCurrentColor,currentMode,setCurrentMode,setMode,setColor,themeSettings,setThemeSettings}}>
                 {children}
     </StateContext.Provider>
   )
}
export const useStateContext=()=>useContext(StateContext)