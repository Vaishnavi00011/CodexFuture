import React from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Project from './Pages/Project'
import About from './Pages/About'
import Sarvice from './Pages/Sarvice'
import Contact from './Pages/Contact'
import Resources from './Pages/Resources'
import ReactDoc from './Pages/ReactDoc'
import Tailwind from './Pages/Tailwind'
import MDN from './Pages/MDN'
import Github from './Pages/Github'
import Freecodecamp from './Pages/Freecodecamp'
import StackOver from './Pages/StackOver'



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/about-us' element={<About></About>}></Route>
        <Route path='/sarvice' element={<Sarvice></Sarvice>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/resources' element={<Resources></Resources>}></Route>
        <Route path='/react-doc' element={<ReactDoc></ReactDoc>}></Route>
        <Route path='/tailwind' element={<Tailwind></Tailwind>}></Route>
        <Route path='/mdn' element={<MDN></MDN>}></Route>
        <Route path='/github' element={<Github></Github>}></Route>
        <Route path='/free-code' element={<Freecodecamp></Freecodecamp>}></Route>
        <Route path='/stack-over' element={<StackOver></StackOver>}></Route>
       
        
     

      </Routes>
    </HashRouter>
  )
}

export default App