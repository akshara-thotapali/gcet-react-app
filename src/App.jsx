import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./components/products";
import Cart from "./components/cart";
import Login from "./components/login";
import { BrowserRouter,Routes, Route , Link} from "react-router-dom";
function App() {
  return (
    <>
     <div>
     <BrowserRouter>
       <header>
        <h1> My Reactstore</h1>
        <Link to="/">Home</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Login">Login</Link>
        <hr />
       </header>
       <main>
       <Routes>
           <Route index element={<Product/>}/>
           <Route path="/" element={<Product/>}></Route>
           <Route path="/Cart" element={<Cart/>}></Route>
           <Route path="/Login" element={<Login/>}></Route>
        </Routes>
       </main>
       
       <footer>
        <hr />
        &copy; 2025.All rights Reserved.
       </footer>
       </BrowserRouter>
     </div>
    </>
  )
}

export default App