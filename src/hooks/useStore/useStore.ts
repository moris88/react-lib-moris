import React from 'react'

interface ObjectStore {
  [key: string]: any
}
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
} => {
  const [storage, setStorage] = React.useState<T>(defaultValue)

  React.useEffect(() => {
    const store = getStore<T>(key)
    if (!areObjectsEqual(store, storage)) setStorage(store)
  }, [key, storage])

  React.useEffect(() => {
    if (key && typeof key === 'string' && key !== '') {
      if (hasKey(key)) {
        setStore(key, getStore(key))
      } else {
        setStore(key, defaultValue)
      }
    }
  }, [defaultValue, key])

  return {
    store: storage,
    setStore: (state: T) => {
      setStorage(state)
      setStore<T>(key, state)
    },
  }
}

export default useStore

function setStore<T extends ObjectStore>(storeName: string, state: T): void {
  localStorage.setItem(storeName, JSON.stringify(state ?? {}))
}

function getStore<T extends ObjectStore>(storeName: string): T {
  const store = localStorage.getItem(storeName)
  return store ? JSON.parse(store) : {}
}

function hasKey(key: string): boolean {
  const store = localStorage.getItem(key)
  return !!store
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
