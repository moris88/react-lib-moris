import React from 'react'
interface IfProps {
  condition: boolean
  otherwise?: React.ReactElement
  children: React.ReactElement
}
type IfComponent = (props: IfProps) => React.ReactElement
const If: IfComponent = (props: IfProps) => {
  const { condition, children, otherwise } = props
  return condition ? children : otherwise ?? <></>
}
export default If
