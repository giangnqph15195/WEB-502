import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
// import toastr from 'toastr'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { signin } from '../api/User'
import { authenticated } from '../utils/localSgate'
type Props = {}
type FormSignIn = {
  email: string,
  password: string
}
const SignIn = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSignIn>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormSignIn> = async data => {

    try {
      const { data: user } = await signin(data)
      authenticated(user, () => {

        toastr.success("Bạn đã đăng nhập thành công")
        navigate("/")
      })
    } catch (error) {
      toastr.error("Bạn đăng nhập không thành công")
    }

    console.log(data)
  }
  return (
    <div>
      <div className='bg-cover bg-center ... bg-[url(https://res.cloudinary.com/dkrifqhuk/image/upload/v1648372167/asm/login-background.591c777f_czzngn.jpg)] pt-28 pb-56' >
        <NavLink to='/'><div className='absolute top-8 left-20 bg-white rounded-lg p-2 flex'><i className="fa-solid fa-angle-left text-lg mx-2"></i><img width={70} src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645017092/asm/footer_logo1_gvkbmr.png" alt="" /></div></NavLink>
        <div>
          <form action="" onSubmit={handleSubmit(onSubmit)} className='formm bg-white rounded-lg p-8'>
            <h3 className='text-center text-xl font-bold'>Đăng nhập</h3>
            <div className='my-8'></div>
            <div className='biginput'>
              <label className='font-bold' htmlFor="">Email:</label>
              <input className='inputform' type="text" placeholder='VD: email@abc.com' {...register('email', {required:true})} />
              {Object.keys(errors).length !== 0 && (
                <ul>
                  {errors.email?.type == 'required' && (<li className='text-[red]'>Email không được trống</li>)}
                </ul>
              )}
            </div>
            <div className='biginput'>
              <label className='font-bold' htmlFor="">Mật khẩu:</label>
              <input className='inputform' type="text" placeholder='Mật khẩu' {...register('password', {required:true})} />
              {Object.keys(errors).length !== 0 && (
                <ul>
                  {errors.password?.type == 'required' && (<li className='text-[red]'>Mật khẩu không được trống</li>)}
                </ul>
              )}
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