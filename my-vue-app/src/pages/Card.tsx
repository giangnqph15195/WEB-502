import React, { useEffect, useState } from 'react'
// import { Table, Tag, Space } from 'antd';
import {useParams} from 'react-router-dom'
import { read } from '../api/cart'
import { TypeCart } from '../type/cart'

type Props = {
  onRemoveCR: (_id : number) => void
  id: (id:number ) => void
}



const Card = (props: Props) => {
  const [cart, setcart] = useState<TypeCart[]>([])
  const {id} = useParams()
  // props.id(id)

  useEffect(()=>{
    const getCart = async () => {
      const {data} = await read(id)
      setcart(data)
    }
    getCart()
  },[])
  console.log('quan trong',id)
  return (
    <div className='my-24'>
      <div className='flex max-w-6xl m-auto mt-56'>
      <div className='table-cart'>
      <table className="table table-hover mr-72">
          <thead className=''>
            <tr className=''>
              <th scope="c" className='text-red-700 text-xl text-center w-10'>Image</th>
              <th scope="col" className='text-red-700 text-xl text-center'>Name</th>
              <th scope="col" className='text-red-700 text-xl text-center'>Price</th>
              <th scope="col" className='text-red-700 text-xl text-center'>Quantiny</th>
              <th scope="col" className='text-red-700 text-xl text-center'>Total</th>
              <th scope="col" className='text-red-700  w-8'></th>
            </tr>
          </thead>
          <tbody className=''>
            {cart.map((item)=> {
              return <tr>
              <th scope="row"><img src={`${item.image}`} alt="" /></th>
              <td className='text-center py-4'>{item.name}</td>
              <td className='text-center py-4'>{item.price}</td>
              <td className='text-center py-4'>{item.quantiny} dsadas </td>
              <td className='text-center py-4'>{item.quantiny * item.price}</td>
              <td className='text-center'><button onClick={()=> {props.onRemoveCR(item._id)}}><i className="fa-solid fa-trash-can"></i></button></td>
            </tr>
            })}
            
            </tbody>
        </table>
      </div>

      <br />
        <div className='w-0.5 ml-4 bg-gray-700'>

        </div> 

      
        <div>
        <h3 className='text-center text-xl text-gray-600 mb-10'>Thông tin thanh toán</h3>
        <form action="" className='ml-10'>
       
          <div className="mb-3">
            <label  className="form-label">Họ và tên</label>
            <input type="text" className="form-control w-96"  />
          </div>
          <div className="mb-3">
            <label  className="form-label">Số điện thoại</label>
            <input type="text" className="form-control w-96"  />
          </div>
          <div className="mb-3">
            <label  className="form-label">Địa chỉ</label>
            <input type="text" className="form-control w-96"  />
          </div>
          <div className="mb-3">
            <label  className="form-label">Ghi chú</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
          </div>
          <button className='bg-orange-500 py-2 text-white font-bold px-8'>Đặt Hàng</button>
        </form> 
        </div>





       


      </div>
    </div>
  )
}

export default Card