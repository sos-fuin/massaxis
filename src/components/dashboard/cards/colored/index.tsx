import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

interface Props {
  variant?: 'v2' | 'v1'
  color?: 'blue' | 'red'
}
export function DBColoredCard({ variant, color }: Props) {
  return (
    <div className={`db-card-colored ${variant} ${color}`}>
      <div className="db-colored-top">
        <div className="c-icon">
          <Icon icon="solar:incoming-call-bold" />
        </div>
        <div className="c-text-box flex items-center gap-3">
          <h4 className="d-text">1.2k</h4>
          <p className="d-text-sub">Inbound Calls</p>
        </div>
      </div>
      <div className="db-colored-bottom">
        <p className="f-text mb-1">935</p>
        <p className="f-text-sub">Problems Solved </p>
      </div>
    </div>
  )
}
