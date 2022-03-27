import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div>
      <div className='bg-cover bg-center ... bg-[url(https://res.cloudinary.com/dkrifqhuk/image/upload/v1648372167/asm/login-background.591c777f_czzngn.jpg)] pt-28 pb-56' >
      <NavLink to='/'><div className='absolute top-8 left-20 bg-white rounded-lg p-2'>Trở về</div></NavLink>
            <div>
                <form action="" className='formm bg-white rounded-lg p-8'>
                    <h3 className='text-center text-xl font-bold'>Đăng ký thành viên</h3>
                    <div className='my-8'></div>
                    <div className='biginput'>
                        <label className='font-bold' htmlFor="">Email:</label>
                        <input className='inputform' type="text" placeholder='VD: email@abc.com' />
                    </div>
                    <div className='biginput'>
                        <label className='font-bold' htmlFor="">Mật khẩu:</label>
                        <input className='inputform' type="text" />
                    </div>
                    <div className='biginput'>
                       <p className='text-center text-sm'>Thông qua việc đăng ký, bạn xác nhận rằng bạn đồng ý Điều khoàn sử dụng và đã đọc, hiểu Chính sách Quyền riêng tư của chúng tôi</p>
                    </div>
                    <button className='bg-orange-400 w-96 py-2 rounded-lg font-bold text-white'>Đăng Nhập</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn