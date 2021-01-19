// Generated with util/create-component.js
import React from 'react'
import { render } from '@testing-library/react'

import ClientMotoBar from './ClientMotoBar'
import { ClientMotoBarProps } from './ClientMotoBar.types'

describe('Test Component', () => {
  let props: ClientMotoBarProps

  beforeEach(() => {
    props = {
      foo: 'bar',
      moto: 'Moto 1'
    }
  })

  const renderComponent = () => render(<ClientMotoBar {...props} />)

  it('should render foo text correctly', () => {
    props.foo = ''
    const { getByTestId } = renderComponent()

    const component = getByTestId('client-moto-bar')

    expect(component).toHaveTextContent('Moto 1')
  })
})
