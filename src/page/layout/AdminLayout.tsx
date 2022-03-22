import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>AdminLayout
        <Outlet />
    </div>
  )
}

export default AdminLayout