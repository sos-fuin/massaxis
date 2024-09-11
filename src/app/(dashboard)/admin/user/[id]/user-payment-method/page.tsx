'use client'
import { DBCard } from '@/components/dashboard/cards'
import { DBTable5 } from '@/components/dashboard/table/5'
import React from 'react'

export default function Home() {
  return (
    <>
      <DBCard>
        <DBTable5 />
      </DBCard>
    </>
  )
}
