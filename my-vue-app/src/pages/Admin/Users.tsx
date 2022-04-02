import React from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { TypeUser } from '../../type/user';

type Props = {
  user: TypeUser[],
  Removeuser: (_id : number) => void
}

const Users = (props: Props) => {
  return (
    <div>
      <h3 className='text-center font-bold text-3xl'>List Users</h3>
     <div className='ml-36'><NavLink to="/admin/users/add"><i className="fa-solid fa-plus"></i>Thêm</NavLink></div>
         <table className="table table-striped table-hover w-9/12 m-auto">
           <thead className='table-dark'>
           <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
           </thead>
           <tbody >
             {props.user.map((item, index)=> {
               return <tr key={index}>
               <th scope="col">{index +1}</th>
               <th scope="col">{item.name}</th>
               <th scope="col">{item.email}</th>
               <th>{item.role}</th>
               <th scope="col"><NavLink to={`/admin/users/${item._id}/edit`}><i className="fa-solid fa-pen-to-square text-black"></i></NavLink></th>
               <th className='w-2' scope="col"><button onClick={()=> props.Removeuser(item._id)}><i className="fa-solid fa-trash"></i></button></th>
             </tr>
             })}
            
           </tbody>
         </table>
    </div>
  )
}

export default Users