// Generated with util/create-component.js
import React from 'react'
import clsx from 'clsx'
import { ClientMotoBarProps } from './ClientMotoBar.types'
import './ClientMotoBar.module.scss'

const ClientMotoBar: React.FC<ClientMotoBarProps> = (props: ClientMotoBarProps) => {
  return (
      <div className={clsx('motoContainer')}>
        <div className={clsx('container')}>
          <div className={clsx('motoText')}>
            <span data-testid="client-moto-bar" className={clsx('font-weight-bold')}>{props.moto}</span>
          </div>
        </div>
      </div>
  )
}

export default ClientMotoBar
