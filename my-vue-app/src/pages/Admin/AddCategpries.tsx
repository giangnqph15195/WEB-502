import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TypeCategories } from '../../type/categories'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type Props = {
  onAddCT: (catrgory: Form) => void
}
type Form = {
  name: string,
  image: string
}
const AddCategpries = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Form> = data => {
    const file = data.image[0]
    const formData = new FormData()

    formData.append('file', file)
    formData.append("upload_preset", "mi59v8ju")

    axios({
      url: "https://api.cloudinary.com/v1_1/dkrifqhuk/image/upload",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-formendcoded"
      },
      data: formData
    }).then((res) => {
      data.image = res.data.url
      console.log(data.image)
      props.onAddCT(data)
      navigate('/admin/categories')
      console.log(data)
    })


  }
  return (
    <div>
      <form className='m-auto max-w-4xl' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name Category:</label>
          <input type="text" className='form-control' {...register('name')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image Category:</label> <br />
          <input type="file" className='' {...register('image')} />
        </div>
        <button className='btn btn-primary'>Add Category</button>
      </form>
    </div>

  )
}

export default AddCategpries