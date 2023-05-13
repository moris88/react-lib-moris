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

### USECOOKIES

```javascript
const { store, setStore } =
  useStore <
  { count: number } >
  {
    defaultValue: { count: 0 },
    key: 'count',
  }
```

#### Example

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
