import './App.css'
import Navbar from "./components/Navbar"
import  {Footer} from "./components/Footer"
import { Outlet } from 'react-router'

function App() {
  

  return (
    <>
    <Navbar/>
    <main>
      <Outlet></Outlet>
    </main>
    
    <Footer></Footer>
    </>
  )
}

export default App