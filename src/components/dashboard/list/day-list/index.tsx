import React from 'react'
interface DbListProps {
  className?: 'primary' | 'success' | 'warning' | 'danger' | 'semi-primary'
}
export function DbDayList({ className }: DbListProps) {
  return (
    <div className={`db-day-list ${className}`}>
      <div className="left">
        <h4 className="db-text fw-600 s-18 black">
          10:20 - 11:00 <span className="db-text s-14 gray">AM</span>
        </h4>
        <p className="db-text s-16 fw-600 gray2">9 Degree Project Estimation Meeting</p>
        <p className="db-text s-14 fw-600 gray2">
          Lead by <span className="db-text blue">Peter Marcus</span>
        </p>
      </div>
      <div className="right">
        <button className="db-button-sec">View</button>
      </div>
    </div>
  )
}
