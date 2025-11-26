
import './App.css'
import { Routes, Route } from 'react-router-dom'
import  Home from './pages/Home/Home'
import Archive from './pages/Home/Archive/Archive'
function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/archive' element={<Archive/>}></Route>
    </Routes>
    </div>
    
  )
}

export default App
