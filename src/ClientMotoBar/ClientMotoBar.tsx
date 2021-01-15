// Generated with util/create-component.js
import React from 'react'

import { ClientMotoBarProps } from './ClientMotoBar.types'

import './ClientMotoBar.module.scss'

const ClientMotoBar: React.FC<ClientMotoBarProps> = (props: ClientMotoBarProps) => {
  return (
      <div className="motoContainer">
        <div className="container">
          <div className="motoText">
            <span className="font-weight-bold">{props.moto}</span>
          </div>
        </div>
      </div>
  )
}

export default ClientMotoBar
