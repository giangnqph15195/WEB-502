import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { get, getall } from '../../api/categories'
import { TypeCategories } from '../../type/categories'
import { Button, message } from 'antd';

const key = 'updatable';
type Props = {
    onUpdatect: (editcategory: Form) => void
}
type Form = {
    name: string,
    image: string,
}

const EditCategory = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Form>()
    const [category, setcategory] = useState<TypeCategories>()
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        const getOne = async () => {
            const { data } = await get(id)
            reset(data)
            setcategory(data)
        }
        getOne()
    }, [])
    let imageUpdate = ""
    const onSubmit: SubmitHandler<Form> = async data => {

        if (data.image[0] != 'h') {
            const file = data.image[0]
            const formData = new FormData()

            formData.append("file", file)
            formData.append("upload_preset", "mi59v8ju")

            const { data: newimage } = await axios({
                url: "https://api.cloudinary.com/v1_1/dkrifqhuk/image/upload",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www/formendcoded"
                },
                data: formData

            })
            imageUpdate = newimage.url
            data.image = imageUpdate
            console.log(data.image)


        }
        props.onUpdatect(data)
        navigate('/admin/categories')
        console.log(data)
        // console.log(data.image[0])
        
    }
    const openMessage = () => {
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
          message.success({ content: 'Loaded!', key, duration: 2 });
        }, 1000);
      };
    
    return (
        <div>
            <form className='m-auto max-w-4xl' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name Category:</label>
                    <input type="text" className='form-control' {...register('name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name Category:</label>
                    <img width={100} src={`${category?.image}`} alt="" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image Category:</label>
                    <input type="file" className='' {...register('image')} /> <br /> <br />
                </div>
                <button className='btn btn-primary' onClick={openMessage}>Edit Category</button>
            </form>
        </div>
    )
}

export default EditCategory