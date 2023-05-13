# REACT-LIB-MORIS

## GUIDE TO USE

### FOR

```javascript
<ul>
  <For list={['a', 'b', 'c']} each={(el, key) => <li key={key}>{el}</li>} />
</ul>
```

### IF

```javascript
<If condition={count > 0}>
  <p>TRUE</p>
</If>
```

### IF-ELSE

```javascript
<If condition={count > 0} otherwise={<p>FALSE</p>}>
  <p>TRUE</p>
</If>
```

### TEST

```javascript
const test = {
  test1: 'test1',
  test2: 'test2',
  test3: 'test3',
  test4: 'test4',
  test5: 'test5',
  test6: 'test6',
}
<Test data={test}/>

/*
OUTPUT BROWSER:
{
  test1: 'test1',
  test2: 'test2',
  test3: 'test3',
  test4: 'test4',
  test5: 'test5',
  test6: 'test6',
}
*/
```

### CLASSNAMES

```javascript
<div
  classNames={classNames([
    'flex',
    'justify-content-cente',
    'align-items-center',
  ])}
>
  ...
</div>
```

### USESTORE

```javascript
interface useStoreProps<T extends ObjectStore> {
  defaultValue: T
  key: string
}

const useStore = <T extends ObjectStore>({
  defaultValue,
  key,
}: useStoreProps<T>): {
  store: T
  setStore: (state: T) => void
}
```

#### Example useStore

```javascript
function App() {
  const { store, setStore } = useStore<{ count: number }>({
    defaultValue: { count: 0 },
    key: 'count',
  })

  return (
    <>
      <label>{store.count}</label>:
      <button
        onClick={() => {
          setStore({ count: store.count + 1 })
        }}
      >+</button>
    </>
  )
}

export default App
```

### USECOOKIES

```javascript
interface Cookie {
  key: string
  value: any
  expirationDays?: number
}

const useCookies = <T extends ObjectCookie>(
  defaultValue?: T
): {
  cookies: T
  setCookie: (coockie: Cookie) => void
  setCookies: (cookies: T) => void
  hasCookie: (cookieName: string, key: string) => boolean
}
```

#### Example useCookies

```javascript
import useCookies from './hooks/useCookies'

function App() {
  const { cookies, setCookie } = useCookies({
    count: 0,
  })

  return (
    <>
      <label>{cookies.count}</label>:
      <button
        onClick={() => {
          console.log('cookies.count', cookies.count)
          if (cookies.count === undefined) {
            setCookie({ key: 'count', value: 1, expirationDays: 1 })
            return
          }
          setCookie({ key: 'count', value: +cookies.count + 1, expirationDays: 1 })
        }}
      >+</button>
    </>
  )
}

export default App
```

## IMPORT TO REACT

```javascript
import {
  If,
  For,
  Test,
  classNames,
  useCookies,
  useStore,
} from 'react-lib-moris'
```

## INSTALL

```bash
npm i react-lib-moris
```
