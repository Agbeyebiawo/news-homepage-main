import React, {createContext, useState} from 'react'

export const ShowProvider = createContext()
const ShowContext = (props) => {
    const [show,setShow] = useState(false)

    const showToggler = ()=>{
        show === false ? setShow(true) : setShow(false)
    }
  return (
    <ShowProvider.Provider value={{show,setShow,showToggler}}>
        {props.children}
    </ShowProvider.Provider>
)
}

export default ShowContext