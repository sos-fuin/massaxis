'use client'
import { KTIcon } from '@/helper/icon'
import { DatePicker, Modal } from 'antd'
import { useState } from 'react'
import Label from '../from/label'
import { DbSelect } from '../from/select'

export const SubscriptionEditModal = () => {
  const [modal2Open, setModal2Open] = useState(false)
  return (
    <>
      <div
        onClick={() => setModal2Open(true)}
        className="flex items-center gap-2 hover:bg-skin-bg-blue p-2 group transition-all w-56">
        <div>
          <KTIcon iconName="pencil" className="text-lg group-hover:text-skin-color-blue-light transition-all" />
        </div>
        <div>
          <p className="text-sm text-skin-color-1 font-medium  group-hover:text-skin-color-blue-light transition-all">
            Subscription Info
          </p>
          <p className="text-sm text-skin-color-2 font-medium  ">Edit Info</p>
        </div>
      </div>
      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '687px' }}
        onCancel={() => setModal2Open(false)}>
        <div className="py-10">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-skin-color-1">Membership Details</h1>
            <p className="If you need more info, please check Support Guidelines. Subject">
              If you need more info, please check Support Guidelines. Subject{' '}
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-5 mt-7">
            <DbSelect
              inputProps={{
                placeholder: 'Select',
              }}
              label="Change Membership *"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex gap-3 flex-col w-full">
                <Label label="Date *" />
                <DatePicker size="large" />
              </div>
              <div className="flex gap-3 flex-col w-full">
                <Label label="Monthly/annually *" />
                <DatePicker size="large" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
