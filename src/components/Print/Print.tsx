import React from 'react'
interface PrintProps {
  data: Object | Array<any>
}
type PrintComponent = (props: PrintProps) => React.ReactElement
const Print: PrintComponent = (props: PrintProps) => {
  const { data } = props
  return <pre>{JSON.stringify(data, null, 5)}</pre>
}
export default Print
