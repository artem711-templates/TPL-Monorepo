// PLUGINS IMPORTS //
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'mutationobserver-shim'

// COMPONENTS IMPORTS //
import AppWrapper from '../src/components/layout/AppWrapper/AppWrapper'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const customRender = (ui, options) =>
  render(ui, {
    wrapper: AppWrapper,
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render }
