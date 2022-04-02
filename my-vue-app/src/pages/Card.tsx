import React from 'react'
// import { Table, Tag, Space } from 'antd';

type Props = {}



const Card = (props: Props) => {
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
            <tr>
              <th scope="row"><img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645535451/asm/mja0kw8wpfovfrfupdr7.jpg" alt="" /></th>
              <td className='text-center py-4'>Mark</td>
              <td className='text-center py-4'>Otto</td>
              <td className='text-center py-4'>@mdo</td>
              <td className='text-center py-4'>@mdo</td>

              <td className='text-center'><button><i className="fa-solid fa-trash-can"></i></button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className='text-center'>@mdo</td>
              <td><i className="fa-solid fa-trash-can"></i></td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className='text-center'>@mdo</td>
              <td><i className="fa-solid fa-trash-can"></i></td>

            </tr>
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