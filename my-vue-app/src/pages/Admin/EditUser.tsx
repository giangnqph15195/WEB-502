// import { Form } from 'antd'
import React, { useEffect } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import {useParams, useNavigate} from 'react-router-dom'
import { findone } from '../../api/User'
import { TypeUser } from '../../type/user'

type Props = {
  editUser : (user : TypeUser) => void
}
type TypeForm = {
  name:string
  email:string
  password:string
  role:number
}

const EditUser = (props: Props) => {
  const {register, handleSubmit, formState:{errors} ,reset} = useForm<TypeForm>()
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
    const getone = async () => {
      const {data} = await findone(id)
      reset(data)
    }
    getone()
  },[])
  const onSubmit: SubmitHandler<TypeForm> = data => {
    props.editUser(data)
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

export default EditUser