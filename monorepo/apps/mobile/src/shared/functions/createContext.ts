import React from 'react'

type ICreateContext<A> = readonly [
  () => A,
  React.ProviderExoticComponent<React.ProviderProps<A | undefined>>,
]

// create context with no upfront defaultValue
// without having to do undefined check all the time
export function createContext<A>(): ICreateContext<A> {
  const ctx = React.createContext<A | undefined>(undefined)

  function useCtx(): A {
    const newCtx = React.useContext(ctx)
    if (!newCtx)
      throw new Error('useCtx must be inside a Provider with a value')

    return newCtx
  }

  // make TypeScript infer a tuple, not an array of union types
  return [useCtx, ctx.Provider] as const
}
