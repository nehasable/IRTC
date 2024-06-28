
import './App.css'
import Home from './pages/Home'
import List from './pages/List'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trains" element={<List/>}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
