import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


type Props = {}

const AddProduct = (props: Props) => {
  return (
    <div>
      <h3 className='text-center text-3xl font-bold'>Add Product</h3>
      <form className='m-auto max-w-4xl'>
  <div className="mb-3">
    <label  className="form-label">Name Product:</label>
    <input type="text" className='form-control' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Image Product:</label>
    <input type="text" className='form-control' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Price:</label>
    <input type="text" className='form-control' />
  </div>
  <div className="mb-3">
    <label  className="form-label">Details:</label>
    <input type="text" className='form-control' />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddProduct