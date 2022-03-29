import React from 'react'
import {NavLink} from 'react-router-dom'
import { TypeCategories } from '../../type/categories'
type Props = {
    category: TypeCategories[],
    onRemovect: (_id:number)=> void
}

const Catrgories = (props: Props) => {
  return (
    <div>
      <h3 className='text-center font-bold text-2xl mb-8'>List Categories</h3>
        <div><NavLink to="/admin/categories/add"><i className="fa-solid fa-plus"></i>Thêm</NavLink></div>
        <table className="table table-striped table-hover w-9/12 m-auto">
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Edit</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
      {props.category.map((item, index)=> {
        console.log(item)
          return<tr key={index}>
          <th className='w-10' scope="row">{index + 1}</th>
          <td className='w-10'>{item.name}</td>
          <td className='w-50'><img width={50} src={`${item.image}`} alt="" /></td> 
          {/* <td>Image</td> */}
          <td  className='w-2'><NavLink to={`/admin/categories/${item._id}/edit`}><i className="fa-solid fa-pen-to-square text-black"></i></NavLink></td>
          <td className='w-2'><button onClick={()=> props.onRemovect(item._id)}><i className="fa-solid fa-trash"></i></button></td>
        </tr>
      })}
     
    
   
  </tbody>
</table>
    </div>
  )
}

export default Catrgories