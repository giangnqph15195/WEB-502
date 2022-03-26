import axios from 'axios'
import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { signin } from '../api/user'

type Props = {}
type FormInput = {
  email: string,
  password: string
}
const SingIn = (props: Props) => {
  const {register,handleSubmit, formState:{errors}} = useForm<FormInput>()
  const onSignIn : SubmitHandler<FormInput> = data => {
     signin(data)
  }
  return (
    <div>SingIn
      <form action="" onSubmit={handleSubmit(onSignIn)}>
        <input type="text" {...register('email')}/>
        <input type="text" {...register('password')}/>
        <button>Dang nhap</button>
      </form>
    </div>
  )
}

export default SingIn