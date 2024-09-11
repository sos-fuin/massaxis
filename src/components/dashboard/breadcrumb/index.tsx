'use client'
import React from 'react'
import { TopBar } from '../top-bar'

export type menuItems = {
  title: string
  path?: string
  active?: boolean
}
interface Props {
  title?: string
  subTitle?: string
  menuItems?: menuItems[]
  children?: React.ReactNode
}
export function DbBreadCrumb({ subTitle, title, menuItems, children }: Props) {
  return (
    <>
      <TopBar menuItems={menuItems ?? []} />
      <div className="flex justify-between items-center flex-wrap gap-2 pt-10 pb-20">
        <div className="db-breadcrumb">
          {title && (
            <div className="db-breadcrumb-title">
              <h2 className="title">{title}</h2>
            </div>
          )}
          {subTitle && (
            <div className="db-breadcrumb-text-box">
              <p className="text">{subTitle}</p>
            </div>
          )}
        </div>
        {children && <div>{children}</div>}
      </div>
    </>
  )
}
