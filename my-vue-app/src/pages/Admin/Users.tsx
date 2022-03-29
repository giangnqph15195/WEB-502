import React from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { NavLink } from 'react-router-dom';

    const { Column, ColumnGroup } = Table;
const data = [
    {
      key: '1',
      name: 'John',
      email: 'Brown',
    },
    {
      key: '2',
      name: 'Jim',
      email: 'Green',
  
    },
    
  ];
type Props = {}

const Users = (props: Props) => {
  return (
    <div>
         <Table dataSource={data}>
    {/* <ColumnGroup title="Name"> */}
      <Column title="First Name" dataIndex="name" key="name" />
      <Column title="Last Name" dataIndex="email" key="email" />
    {/* </ColumnGroup> */}
    <Column title="Age" dataIndex={`xoa`} key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <button>Xoa</button>
          <NavLink to={`edit/:id`}>edit</NavLink>
        </Space>
      )}
    />
  </Table>
    </div>
  )
}

export default Users