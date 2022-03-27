import React from 'react'
import { NavLink } from 'react-router-dom'
import { TypeProduct } from '../../type/products'

type PropsList = {
  product: TypeProduct[],
  onRemove: (id:number) => void
}

const Products = (props: PropsList) => {
  return (
    <div>
        <div><NavLink to="/admin/add"><i className="fa-solid fa-plus"></i>Thêm</NavLink></div>
        <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    {props.product.map((item, index) => {
      return <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td><img width={50} src={`${item.img}`} alt="" /></td> 
      <td>{item.price}</td>
      <td>{item.details}</td>
      <td className='w-2'><NavLink to={`/admin/${item.id}/edit`}>Edit</NavLink></td>
      <td className='w-2'><button onClick={()=> props.onRemove(item.id)}>Xóa</button></td>
    </tr>
    })}
    
   
  </tbody>
</table>
    </div>
  )
}

export default Products