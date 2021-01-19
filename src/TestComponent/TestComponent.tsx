import React from 'react'
import clsx from 'clsx'

import { TestComponentProps } from './TestComponent.types'

import './TestComponent.module.scss'

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={clsx(
      'test-component', `test-component-${theme}`
    )}>
    <h1 className={clsx('heading')}>I'm the test component</h1>
    <h2>Well, Hello there! </h2>
  </div>
)

export default TestComponent
