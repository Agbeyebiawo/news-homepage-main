import NewsPage from "./components/NewsPage"
import Sidebar from "./components/Sidebar"
import { ShowProvider } from "./context/ShowContext"
import { useContext } from "react"

function App() {
  const {show,setShow,showToggler} = useContext(ShowProvider)

  return (
    <>
        <Sidebar showToggler={showToggler} show={show} setShow={setShow}/>
        <NewsPage />
    </>
  )
}

export default App
