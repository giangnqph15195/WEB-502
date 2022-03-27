import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import 'antd/dist/antd.css';
import Websitelayout from './layuot/Websitelayout'
import ListProducts from './pages/ListProducts'
import BlogPage from './pages/BlogPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Adminlayout from './layuot/Adminlayout'
import Products from './pages/Admin/Products'
import AddProduct from './pages/Admin/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Websitelayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='products'>
            <Route index element={<ListProducts/>}></Route>
          </Route>
          <Route path='/blog' element={<BlogPage/>}></Route>
          
        </Route>
        <Route path='signin' element={<SignIn />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
          

          <Route path='admin' element={<Adminlayout/>}>
            <Route index element={<Products/>}></Route>
            <Route path='/admin/add' element={<AddProduct/>}></Route>
          </Route>
       </Routes>
    </div>

    
  )
}

export default App
