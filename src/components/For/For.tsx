import React from 'react'
interface ForProps<T extends unknown> {
  list: T[]
  each: (el: T, key: number) => React.ReactElement
}
type ForComponent = <T>(props: ForProps<T>) => React.ReactElement
const For: ForComponent = function forFunction<T>(props: ForProps<T>) {
  const { list, each } = props
  if (list instanceof Array) return <>{list.map(each)}</>
  else throw new Error(`Attribute 'list' no array!`)
}
export default For
