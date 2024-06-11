import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Cart from './pages/cart'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>} ></Route>
        <Route path={"/cart"} element={<Cart/>} ></Route>
       
      </Routes>
    </div>
  )
}

export default App
