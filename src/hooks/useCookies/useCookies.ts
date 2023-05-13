import React from 'react'

interface Cookie {
  key: string
  value: any
  expirationDays?: number
}

interface ObjectCookie {
  [name: string]: any
}

const useCookies = <T extends ObjectCookie>(
  defaultValue?: T
): {
  cookies: T
  setCookie: (coockie: Cookie) => void
  setCookies: (cookies: T) => void
  hasCookie: (cookieName: string, key: string) => boolean
} => {
  const [myCookies, setMyCookies] = React.useState<T>(getCookies<T>())

  React.useEffect(() => {
    const cookies = getCookies<T>()
    if (!areObjectsEqual(myCookies, cookies)) setMyCookies(cookies)
  }, [myCookies])

  React.useEffect(() => {
    if (defaultValue && Object.keys(myCookies).length === 0) {
      setCookies<T>(defaultValue)
    }
  }, [defaultValue, myCookies])

  return {
    cookies: myCookies,
    setCookie: (coockie: Cookie) => {
      setCookie(coockie)
      setMyCookies(getCookies<T>())
    },
    setCookies: (cookies: T) => {
      setCookies<T>(cookies)
      setMyCookies(cookies)
    },
    hasCookie: hasCookieKey,
  }
}

export default useCookies

function setCookie(coockie: Cookie): void {
  const { key, value, expirationDays } = coockie
  let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

  if (expirationDays) {
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + expirationDays)
    cookieString += `; expires=${expirationDate.toUTCString()}; path=/`
  }

  document.cookie = cookieString
}

function getCookies<T extends ObjectCookie>(): T {
  const cookieString = document.cookie
  if (cookieString === '') return {} as T
  const cookies = cookieString.split('; ')

  const cookieObject: ObjectCookie = {}
  cookies.forEach((cookie) => {
    const [name, value] = cookie.split('=')
    cookieObject[name] = decodeURIComponent(value)
  })

  return cookieObject as T
}

function setCookies<T extends ObjectCookie>(cookies: T): void {
  if (!cookies) return
  Object.keys(cookies).forEach((key) => {
    const value = encodeURIComponent(cookies[key])
    document.cookie = `${key}=${value}`
  })
}

function hasCookieKey(cookieName: string, key: string): boolean {
  const cookies = getCookies()

  for (const cookie in cookies) {
    if (cookie === cookieName) {
      const parsedCookie: ObjectCookie = cookies[cookie]
      return key in parsedCookie
    }
  }

  return false
}

function areObjectsEqual(obj1: any, obj2: any): boolean {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }

  return true
}
