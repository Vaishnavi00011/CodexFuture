import React from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Project from './Pages/Project'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        
     

      </Routes>
    </HashRouter>
  )
}

export default App