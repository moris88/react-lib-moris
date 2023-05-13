type ClassName = (classNames: string[]) => string

const classNames: ClassName = (classNames: string[]) => {
  if (!classNames) return ''
  if (classNames.length === 1) return classNames[0]
  return classNames.reduce((previous, current) => `${previous} ${current} `)
}

export default classNames
