'use client'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable4 } from '@/components/dashboard/table/4'
import React from 'react'

export default function Home() {
  return (
    <>
      <DBCard>
        <DBTable4 />
      </DBCard>
    </>
  )
}
