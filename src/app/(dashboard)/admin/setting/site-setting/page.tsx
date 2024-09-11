'use client'
import { DbBreadCrumb } from '@/components/dashboard'
import { DBCard } from '@/components/dashboard/cards'
import { DbInput2 } from '@/components/dashboard/from/input2'
import Label from '@/components/dashboard/from/label'
import DragAndDrop from '@/components/dashboard/upload/drag-drop'
import { KTIcon } from '@/helper/icon'
import { Button } from 'antd'
import React from 'react'

export default function Page() {
  return (
    <>
      <DbBreadCrumb
        title={`User Feedback`}
        subTitle="Central Hub for Personal Customization"
        menuItems={[
          { title: 'Dashboard', path: '/admin' },
          { title: 'User Feedback', path: '' },
        ]}></DbBreadCrumb>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <DBCard header={<h1 className="h-text">Hero Section</h1>}>
            <div className="wrap ">
              <div className="flex flex-col gap-5">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Heading "
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Description  "
                />
                <div className="flex flex-col gap-3">
                  <Label label="Thumbnail"></Label>
                  <DragAndDrop />
                </div>
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Button 01  "
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Button 02"
                />
              </div>
            </div>
          </DBCard>
          <DBCard header={<h1 className="h-text">FAQ</h1>}>
            <div className="wrap ">
              <div className="flex flex-col gap-5">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Question 01 "
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Answer"
                />
                <div className="flex justify-end items-center gap-2">
                  <span>Add new Question and Answer</span>
                  <button className="text-4xl text-skin-color-blue-light">
                    <KTIcon iconName="plus-circle" />
                  </button>
                </div>
              </div>
            </div>
          </DBCard>
          <DBCard header={<h1 className="h-text">CTA</h1>}>
            <div className="wrap ">
              <div className="flex flex-col gap-5">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Heading Text "
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Description "
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Button "
                />
                <div className="flex justify-end">
                  <Button type="primary">Add card</Button>
                </div>
              </div>
            </div>
          </DBCard>
        </div>
        <div className="flex flex-col gap-5">
          <DBCard header={<h1 className="h-text">Service</h1>}>
            <div className="wrap ">
              <div className="flex flex-col gap-5">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Heading Text "
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Description  "
                />

                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Card Heeding"
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Description"
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Button "
                />
                <div className="flex justify-end">
                  <Button type="primary">Add card</Button>
                </div>
              </div>
            </div>
          </DBCard>
          <DBCard header={<h1 className="h-text">Why Chose Us</h1>}>
            <div className="wrap ">
              <div className="flex flex-col gap-5">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Heading Text "
                />
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Description  "
                />

                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Card Heeding"
                />
                <div className="flex gap-2 items-end">
                  <div className="w-full">
                    <DbInput2
                      inputProps={{
                        placeholder: 'Type...',
                      }}
                      label="Description"
                    />
                  </div>
                  <button className="text-4xl text-skin-color-blue-light">
                    <KTIcon iconName="plus-circle" />
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <Label label="Thumbnail"></Label>
                  <DragAndDrop />
                </div>
                <div className="flex justify-end">
                  <Button type="primary">Add card</Button>
                </div>
              </div>
            </div>
          </DBCard>
        </div>
      </div>
    </>
  )
}
