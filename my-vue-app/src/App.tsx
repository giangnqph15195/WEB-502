import { useEffect, useState } from 'react'
import logo from './logo.svg'
// import  axios from 'axios'
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
import EditProduct from './pages/Admin/EditProduct'
import { TypeProduct } from './type/products'
import { add, list, remove, update } from './api/products'
// import { add } from './api/products'

function App() {
  const [products, setproducts] = useState<TypeProduct[]>([])
  useEffect(()=> {
      const getPd = async ()=> {
        const {data} = await list()
        setproducts(data)
      }
      getPd()
  },[])


  const onAddPd = async (product : TypeProduct) =>{
    const {data} = await add(product)
    setproducts([...products, data])
  }

  const RemoveItem = async (id:number)=> {
    remove(id)

    setproducts(products.filter(item => item.id !== id))
  }

  const onUpdateItem = async (product: TypeProduct)=>{
    const {data} = await update(product)
    setproducts(products.map(item=> item.id == data.id ? data : item))
  }
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
            <Route index element={<Products product={products} onRemove={RemoveItem}/>}></Route>
            <Route path='add' element={<AddProduct onAdd={onAddPd}/>}></Route>
            <Route path=':id/edit' element={<EditProduct onUpdate={onUpdateItem}/>}></Route>
          </Route>
       </Routes>
    </div>

    
  )
}

export default App
