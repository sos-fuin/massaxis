import React from 'react'
interface DbListProps {
  children?: React.ReactNode
  variant?: 'default' | 'no-border'
}
export function DbCalenderList({}: DbListProps) {
  return (
    <ul className="db-calender-list">
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item active">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item  ">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
      <li>
        <div className="db-calender-list-item">
          <p className="d-week">Tu</p>
          <p className="d-date">23</p>
        </div>
      </li>
    </ul>
  )
}
