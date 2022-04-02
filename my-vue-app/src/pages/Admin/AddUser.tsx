import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
type Props = {
    onUser :  (userr : Form) => void
}
type Form = {
    name: string
    email:string
    password:string
    role:string
}
const AddUser = (props: Props) => {
    const {register,handleSubmit,formState:{errors}} = useForm<Form>()
    const navigate = useNavigate()
    const onSubmit : SubmitHandler<Form> = data => {
        props.onUser(data)
        navigate('/admin/users')
        console.log(data)
    }
  return (
    <div>
        <h3 className='text-xl text-center font-bold'>Add Users</h3>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='max-w-3xl m-auto'>
        <div className="mb-3">
    <label  className="form-label">Name:</label>
    <input type="text" className='form-control' {...register('name')} />
    </div>
  
  <div className="mb-3">
    <label  className="form-label">Email:</label>
    <input type="email" className='form-control' {...register('email')} />
  </div>
  <div className="mb-3">
    <label  className="form-label">PassWord</label>
    <input type="text" className='form-control' {...register('password')} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Role</label>
    <input type="text" className='form-control' placeholder='1 hoặc 0' {...register('role')} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddUser