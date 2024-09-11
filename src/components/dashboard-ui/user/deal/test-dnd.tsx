'use client'

import { Reorder } from 'framer-motion'
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

export default function TestDnD() {
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

  const handleSubItemDrop = (sourceMainDealId: number, targetMainDealId: number, item: SubItemType) => {
    setMainDeals((prevDeals) => {
      const sourceDealIndex = prevDeals.findIndex((deal) => deal.id === sourceMainDealId)
      const targetDealIndex = prevDeals.findIndex((deal) => deal.id === targetMainDealId)

      if (sourceDealIndex === -1 || targetDealIndex === -1) return prevDeals

      const sourceSubItems = [...prevDeals[sourceDealIndex].sub]
      const targetSubItems = [...prevDeals[targetDealIndex].sub]

      // Remove item from source
      const itemIndex = sourceSubItems.findIndex((sub) => sub.id === item.id)
      if (itemIndex > -1) {
        sourceSubItems.splice(itemIndex, 1)
      }

      // Add item to target
      targetSubItems.push(item)

      const updatedDeals = [...prevDeals]
      updatedDeals[sourceDealIndex] = {
        ...updatedDeals[sourceDealIndex],
        sub: sourceSubItems,
      }
      updatedDeals[targetDealIndex] = {
        ...updatedDeals[targetDealIndex],
        sub: targetSubItems,
      }

      return updatedDeals
    })
  }

  return (
    <div className="flex gap-4">
      <Reorder.Group axis="x" values={mainDeals} onReorder={handleMainDealReorder} className="flex gap-4">
        {mainDeals.map((mainDeal) => (
          <Reorder.Item
            key={mainDeal.id}
            value={mainDeal}
            dragListener={false}
            className="max-w-[291px] w-full border border-skin-color-1 rounded-xl shadow px-3 py-4 min-h-[582px]">
            <div className="mt-1 ms-3 relative">
              <h2>{mainDeal.name}</h2>
            </div>

            <div className="flex flex-col gap-3">
              <Reorder.Group
                axis="y"
                values={mainDeal.sub}
                onReorder={(newSubItems) => handleSubItemReorder(newSubItems, mainDeal.id)}
                className="flex flex-col gap-2">
                {mainDeal.sub.map((subItem) => (
                  <Reorder.Item
                    key={subItem.id}
                    value={subItem}
                    className="p-3 border rounded"
                    whileDrag={{ scale: 1.05 }}
                    onDragEnd={() =>
                      handleSubItemDrop(
                        mainDeal.id,
                        // Target MainDeal ID to be updated in the real drop logic
                        mainDeal.id,
                        subItem,
                      )
                    }>
                    <DealCardItem item={subItem} />
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}

function DealCardItem({ item }: { item: SubItemType }) {
  return <div>{item.name}</div>
}
