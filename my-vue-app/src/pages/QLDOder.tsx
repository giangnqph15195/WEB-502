import React from 'react'
import { Steps } from 'antd';

const { Step } = Steps;
type Props = {}

const QLDOder = (props: Props) => {
  return (
    <div>QLDOder
        <Steps current={1} percent={60}>
    <Step title="Finished" description="This is a description." />
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
    </div>
  )
}

export default QLDOder