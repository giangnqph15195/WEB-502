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
import { TypeUser } from './type/user'
import { create, list, remove, update } from './api/products'
import DetailProduct from './pages/DetailProduct'
import Catrgories from './pages/Admin/Catrgories'
import { TypeCategories } from './type/categories'
import { addct, getall, removect, updatect } from './api/categories'
import AddCategpries from './pages/Admin/AddCategpries'
import Users from './pages/Admin/Users'
import Categories from './pages/Categories'
import EditCategory from './pages/Admin/EditCategory'
import Item from 'antd/lib/list/Item'
import { adduser, edituser, listuser, removeuser, signup } from './api/User'
import AddUser from './pages/Admin/AddUser'
import EditUser from './pages/Admin/EditUser'
import Card from './pages/Card'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { TypeCart } from './type/cart'
import { addCard, deleteCart } from './api/cart'
import Order from './pages/Admin/Order'
import DetailOrder from './pages/Admin/DetailOrder'
import QLOrder from './pages/QLOrder'
import QLDOder from './pages/QLDOder'
// import News from './pages/news'
// import { add } from './api/products'

function App() {
  const [products, setproducts] = useState<TypeProduct[]>([])
  const [categories, setcategories] = useState<TypeCategories[]>([])
  const [users, setuser] = useState<TypeUser[]>([])
  const [carts, setcart] = useState<TypeCart[]>([])
  useEffect(() => {
    const getCT = async () => {
      const { data } = await getall()
      setcategories(data)
    }
    getCT()
  }, [])
  useEffect(() => {
    const getPd = async () => {
      const { data } = await list()
      setproducts(data)
    }
    getPd()
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listuser()
      setuser(data)
    }
    getUser()
  }, [])

  const onAddPd = async (product: TypeProduct) => {
    try {
      const { data } = await create(product)
      setproducts([...products, data])
      toastr.success("Bạn thêm sản phẩm thành công")
    } catch (error) {
      toastr.error("Bạn thêm sản phẩm không thành công")
    }
  }

  const RemoveItem = async (_id: number) => {
    const confirm = window.confirm('Bạn có muốn xóa không')
    if (confirm) {
      remove(_id)
      setproducts(products.filter(item => item._id !== _id))
    }

  }

  const onUpdateItem = async (product: TypeProduct) => {
    const { data } = await update(product)
    setproducts(products.map(item => item._id == data._id ? data : item))
  }

  const AddCategory = async (category: TypeCategories) => {
    const { data } = await addct(category)
    setcategories([...categories, data])
  }

  const UpdateCaTe = async (editcategory: TypeCategories) => {
    const { data } = await updatect(editcategory)
    setcategories(categories.map(item => item._id == data._id ? data : item))
  }

  const removeCT = async (_id: number) => {
    const confirm = window.confirm("Bạn có muốn xóa danh mục")
    if (confirm) {
      removect(_id)
      setcategories(categories.filter(item => item._id !== _id))
    }

  }
  const onAddUser = async (userr: TypeUser) => {
    const { data } = await adduser(userr)
    setuser([...users, data])
  }

  const onEditUser = async (user: TypeUser) => {
    const { data: newus } = await edituser(user)
    setuser(users.map(item => item._id == newus._id ? newus : item))
  }

  const RemoveUS = async (_id: number) => {
    const confirm = window.confirm("Bạn có muốn xóa tài khoản")
    if (confirm) {
      removeuser(_id)
      setuser(users.filter(item => item._id !== _id))
    }
  }


  const AddCart = async (productCR: TypeCart) => {
    const addCr = async () => {
      const { data } = await addCard(productCR)
      setcart([...carts, data])
    }
    addCr()
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Websitelayout />}>

          <Route index element={<HomePage product={products} />}></Route>
          <Route path='products'>
            <Route index element={<ListProducts />}></Route>
            <Route path=':id' element={<DetailProduct onAddCart={AddCart} />}></Route>
          </Route>

          <Route path='category/:slug' element={<Categories />}></Route>
          <Route path='blog' element={<BlogPage />}></Route>
          <Route path='cart/:id' element={<Card  />}></Route>

          <Route path='order'>
            <Route index element={<QLOrder/>}></Route>
            <Route path=':id' element={<QLDOder/>}></Route>
          </Route>

        </Route>

        <Route path='signin' element={<SignIn />}></Route>
        <Route path='signup' element={<SignUp />}></Route>





        <Route path='admin' element={<Adminlayout />}>
          <Route index element={<Products product={products} onRemove={RemoveItem} />}></Route>
          <Route path='add' element={<AddProduct onAdd={onAddPd} />}></Route>
          <Route path=':id/edit' element={<EditProduct onUpdate={onUpdateItem} />}></Route>
          <Route path='categories' >
            <Route index element={<Catrgories category={categories} onRemovect={removeCT} />}></Route>
            <Route path='add' element={<AddCategpries onAddCT={AddCategory} />}></Route>
            <Route path=':id/edit' element={<EditCategory onUpdatect={UpdateCaTe} />}></Route>
          </Route>
          <Route path='users'>
            <Route index element={<Users user={users} Removeuser={RemoveUS} />}></Route>
            <Route path='add' element={<AddUser onUser={onAddUser} />}></Route>
            <Route path=':id/edit' element={<EditUser editUser={onEditUser} />}></Route>
            
          </Route>
          <Route path='order'>
            <Route index  element={<Order/>}></Route>
            <Route path=':id' element={<DetailOrder/>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>


  )
}

export default App
