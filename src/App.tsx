import { useEffect, useState } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductAdd from './page/ProductAdd'
import AdminLayout from './page/layout/AdminLayout'
import ProductList from './page/ProductList'
import { Iproduct } from './type/product'
import ProductEdit from './page/ProductEdit'
import SignUp from './page/SignUp'
import { UserType } from './type/User'
import SingIn from './page/SingIn'

function App() {
  const [products, setproducts] = useState<Iproduct[]>([])
  

  useEffect (()=>{
    const getProduct = async () => {
      const { data } = await axios.get("http://localhost:3001/products")
      setproducts(data)
    }
    getProduct()
  },[])

  const removeItem = async (id:number) => {
    axios.delete(`http://localhost:3001/products/${id}`)
    setproducts(products.filter(item => item.id !== id))
  }

  const onHandleAdd = async (product : Iproduct) =>{
    const { data } = await axios.post("http://localhost:3001/products", product)
    setproducts([...products, data])
  
  }
  const onUpdatePD = async (product: Iproduct) => {
    const {data} = await axios.put(`http://localhost:3001/products/${product.id}`, product )
    setproducts(products.map(item => item.id == data.id ? data : item))
  }
  return (
    <div className='App'>
        <h1>HEloo</h1>
        <Routes>
          <Route path='/' element={`Home Page`}>
            
          </Route>
          <Route path='signup' element={<SignUp />}></Route>
          <Route path='signin' element={<SingIn/>}></Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route path='products'> 
                <Route index element={<ProductList products={products} onRemove={removeItem}/>}></Route>
                <Route path=':id/edit' element={<ProductEdit onUpdate={onUpdatePD}/>}></Route>
                <Route path='add' element={<ProductAdd name="Giang" onAdd={onHandleAdd}/>}></Route>
            </Route>
          </Route>
        </Routes>
    </div>

      
  )
}

export default App
