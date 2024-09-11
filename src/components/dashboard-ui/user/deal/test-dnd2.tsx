/* eslint-disable no-unused-vars */
'use client'

import { DragControls, Reorder, useDragControls } from 'framer-motion'
import { useState } from 'react'

type SubItemType = {
  id: number
  name: string
}

type MainDealType = {
  id: number
  name: string
  sub: SubItemType[]
}

export default function TestDnD2() {
  const controls = useDragControls()

  const [mainDeals, setMainDeals] = useState<MainDealType[]>([
    {
      name: 'main deal',
      id: 1,
      sub: [
        {
          name: 'sub deal 1',
          id: 1,
        },
      ],
    },
    {
      name: 'main deal 2',
      id: 2,
      sub: [
        {
          name: 'sub deal 2.1',
          id: 2,
        },
        {
          name: 'sub deal 2.2',
          id: 3,
        },
      ],
    },
  ])

  const handleMainDealReorder = (newMainDeals: MainDealType[]) => {
    setMainDeals(newMainDeals)
  }

  const handleSubItemReorder = (newSubItems: SubItemType[], mainDealId: number) => {
    setMainDeals((prevDeals) =>
      prevDeals.map((deal) => (deal.id === mainDealId ? { ...deal, sub: newSubItems } : deal)),
    )
  }

  return (
    <div className="flex gap-4">
      <Reorder.Group axis="x" values={mainDeals} onReorder={handleMainDealReorder} className="flex gap-4">
        {mainDeals.map((mainDeal) => (
          <Reorder.Item
            key={mainDeal.id}
            value={mainDeal}
            dragListener={false}
            dragControls={controls}
            className="max-w-[291px] w-full border border-skin-color-1 rounded-xl shadow px-3 py-4 min-h-[582px]">
            <DealCard controls={controls} data={mainDeal} onReorder={handleSubItemReorder} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}

function DealCardItem({ item }: { item: SubItemType }) {
  return <div>{item.name}</div>
}

function DealCard({
  controls,
  data,
  onReorder,
}: {
  controls: DragControls
  data: MainDealType
  onReorder: (newSubItems: SubItemType[], mainDealId: number) => void
}) {
  return (
    <div>
      <button onPointerDown={(e) => controls.start(e)}>Drag</button>
      <Reorder.Group axis="y" values={data.sub} onReorder={(newSubItems) => onReorder(newSubItems, data.id)}>
        {data.sub.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            <DealCardItem item={item} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
