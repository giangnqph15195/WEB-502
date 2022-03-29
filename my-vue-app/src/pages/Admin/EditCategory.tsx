import React, { useEffect } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { get } from '../../api/categories'

type Props = {
    onUpdatect : (editcategory: Form) =>void
}
type Form = {
    name:string,
    image:string
}

const EditCategory = (props: Props) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Form>()
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        const getOne = async () => {
            const {data} = await get(id)
            reset(data)
        }
        getOne()
    },[])
    const onSubmit : SubmitHandler<Form> = data => {
        props.onUpdatect(data)
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

export default EditCategory