import React from 'react'
import {NavLink , useNavigate} from 'react-router-dom'
import {useForm , SubmitHandler} from 'react-hook-form'
import { signup } from '../api/User'
import toastr from 'toastr'
import "toastr/build/toastr.min.css"
type Props = {}
type FormSignUp = {
    name: string,
    email:string,
    password: string
    role:number
}
const SignUp = (props: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormSignUp>()
    const navigate = useNavigate()
    const onSingUp: SubmitHandler<FormSignUp> = data => {
        try {
            signup(data)
            toastr.succces('Đăng ký thành công thành công')
            navigate('/signin')
        } catch (error) {
            toastr.error("Đăng ký không thành công")
            
        }
   
       
        console.log(data)
    }
  return (
    <div>
        <div className='bg-cover bg-center ... bg-[url(https://res.cloudinary.com/dkrifqhuk/image/upload/v1648372167/asm/login-background.591c777f_czzngn.jpg)] pt-28 pb-36' >
      <NavLink to='/'><div className='absolute top-8 left-20 bg-white rounded-lg p-2 flex'><i className="fa-solid fa-angle-left text-lg mx-2"></i><img width={70} src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645017092/asm/footer_logo1_gvkbmr.png" alt="" /></div></NavLink>

            <div>
                <form action="" onSubmit={handleSubmit(onSingUp)} className='formm bg-white rounded-lg p-8'>
                {/* {Object.keys(errors).length !== 0 && (
                            <ul className='w-[70%]'>
                                {errors.name?.type === "required" && <li className='text-[red]'>Tên không được bỏ trống</li>}
                                {errors.email?.type === "required" && (<li className='text-[red]'>Mô tả không được bỏ trống</li>)}
                                {errors.password?.type === "required" && (<li className='text-[red]'>Email không được bỏ trống</li>)}
                            </ul>
                        )} */}
                    <h3 className='text-center text-xl font-bold'>Đăng ký thành viên</h3>
                    <div className='my-8'></div>
                    <div className='biginput'>
                        <label className='font-bold' htmlFor="">Họ tên:</label>
                        <input className='inputform' type="text" placeholder='VD: Giang Nguyễn' {...register('name',{required:true})} />
                        {Object.keys(errors).length !== 0 && (
                            <ul className='w-[70%]'>
                                {errors.name?.type === "required" && <li className='text-[red]'>Tên không được bỏ trống</li>}
                                {/* {errors.email?.type === "required" && (<li className='text-[red]'>Mô tả không được bỏ trống</li>)}
                                {errors.password?.type === "required" && (<li className='text-[red]'>Email không được bỏ trống</li>)} */}
                            </ul>
                        )}
                    </div>
                    <div className='biginput'>
                        <label className='font-bold' htmlFor="">Email:</label>
                        <input className='inputform' type="text" placeholder='VD: email@abc.com' {...register('email',{required:true, pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/})} />{Object.keys(errors).length !== 0 && (
                            <ul className='w-[70%]'>
                                {errors.email?.type === "required" && (<li className='text-[red]'>Email không được bỏ trống</li>)}
                                {errors.email?.type === "pattern" && (<li className='text-[red]'>Email không hợp lệ</li>)}
                            </ul>
                        )}
                        
                    </div>
                    <div className='biginput'>
                        <label className='font-bold' htmlFor="">Mật khẩu:</label>
                        <input className='inputform' placeholder='Mật khẩu' type="password" {...register('password',{required:true})} />
                        {Object.keys(errors).length !== 0 && (
                            <ul className='w-[70%]'>
                                {errors.password?.type === "required" && (<li className='text-[red]'>PassWord không được bỏ trống</li>)}
                            </ul>
                        )}
                    </div>
                    <div className='biginput'>
                        <input className='inputform' type="hidden" value={`1`} {...register('role',{required:true})} />
                    </div>
                    <div className='biginput'>
                       <p className='text-center text-sm'>Thông qua việc đăng ký, bạn xác nhận rằng bạn đồng ý Điều khoàn sử dụng và đã đọc, hiểu Chính sách Quyền riêng tư của chúng tôi</p>
                    </div>
                    <button className='bg-orange-400 w-96 py-2 font-bold rounded-lg text-white'>Đăng Ký</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp