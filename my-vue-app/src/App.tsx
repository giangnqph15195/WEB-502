import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import 'antd/dist/antd.css';
import Websitelayout from './layuot/Websitelayout'
import ListProducts from './pages/ListProducts'
import BlogPage from './pages/BlogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1 className="text-3xl font-bold text-orange-800 underline">
      Hello world!
    </h1>
     
     <Routes>
        <Route path='/' element={<Websitelayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='products'>
            <Route index element={<ListProducts/>}></Route>
          </Route>
          <Route path='/blog' element={<BlogPage/>}></Route>
        </Route>
          
       </Routes>
    </div>

    
  )
}

export default App
