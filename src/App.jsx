
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Myprojects from "./pages/myprojects"
import GraphicDesigner from "./pages/graphicdesigner"
import About from "./pages/About"
import Contact from "./pages/contact"

function App(){
  return<>
  {/* <GraphicDesigner/> */}
  
 
 
  <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/projects" element={  <Myprojects/>}/>
    <Route path="/GraphicDesigner" element={<GraphicDesigner/>}/>
    <Route path="/About" element={ <About/>}/>
    <Route path="/contact" element={ <Contact/>}/>
  
   
  
    

  </Routes>
  
  
  </>
}
export default App