import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { TypeCategories } from '../../type/categories'
import {useNavigate} from 'react-router-dom'

type Props = {
  onAddCT : (catrgory: Form) => void
}
type Form = {
  name: string,
  image: string
}
const AddCategpries = (props: Props) => {
  const {register,handleSubmit ,formState: {errors}} = useForm<Form>()
  const navigate = useNavigate()
  const onSubmit : SubmitHandler<Form> = data => {
    props.onAddCT(data)
    navigate('/admin/categories')
    console.log(data)
  }
  return (
    <div>
       <form className='m-auto max-w-4xl' onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label  className="form-label">Name Category:</label>
    <input type="text" className='form-control' {...register('name')} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Image Category:</label>
    <input type="text" className='form-control' {...register('image')} />
  </div>
  <button>Add Category</button>
    </form>
    </div>

  )
}

export default AddCategpries