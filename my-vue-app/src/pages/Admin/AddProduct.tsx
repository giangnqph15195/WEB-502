import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


type Props = {}

const AddProduct = (props: Props) => {
  return (
    <div>
      <form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="text" className='form-control' />
    {/* <input type='text' className="form-control" > */}
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="text" className='form-control' />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddProduct