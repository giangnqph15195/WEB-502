import React from 'react'
import { NavLink } from 'react-router-dom'
import { TypeProduct } from '../../type/products'

type PropsList = {
  product: TypeProduct[],
  onRemove: (_id:number) => void
}

const Products = (props: PropsList) => {
  return (
    <div>
      <h3 className='text-center text-3xl font-bold'>List Products</h3>
        <div><NavLink to="/admin/add"><i className="fa-solid fa-plus"></i>Thêm</NavLink></div>
        <table className="table table-striped table-hover">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Edit</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    {props.product.map((item, index) => {
      return <tr  key={index}>
      <th className='w-10' scope="row">{index + 1}</th>
      <td className='w-52'>{item.name}</td>
      <td><img width={50} src={`${item.image}`} alt="" /></td> 
      <td className='w-72'>{item.price}</td>
      <td className='w-72'>{item.description}</td>
      <td className='w-2'><NavLink to={`/admin/${item._id}/edit`}><i className="fa-solid fa-pen-to-square text-black"></i></NavLink></td>
      <td className='w-2'><button onClick={()=> props.onRemove(item._id)}><i className="fa-solid fa-trash"></i></button></td>
    </tr>
    })}
    
   
  </tbody>
</table>
    </div>
  )
}

export default Products