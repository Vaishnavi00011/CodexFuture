import React from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
       
        
     

      </Routes>
    </HashRouter>
  )
}

export default App