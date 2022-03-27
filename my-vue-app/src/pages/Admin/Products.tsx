import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Products = (props: Props) => {
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td> 
      <td>Otto</td>
      <td>@mdo</td>
      <td className='w-2'><NavLink to='/admin/edit'>Edit</NavLink></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
    </tr>
   
  </tbody>
</table>
    </div>
  )
}

export default Products