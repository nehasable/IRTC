
import './App.css'
import Home from './pages/Home'
import List from './pages/List'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';

import Signup from './pages/Signup';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trains" element={<List/>}/>
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={ <Signup/>} />
      
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
