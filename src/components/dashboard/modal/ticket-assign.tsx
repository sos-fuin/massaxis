'use client'
import { KTIcon } from '@/helper/icon'
import { Modal } from 'antd'
import { useState } from 'react'
import { DbInput2 } from '../from/input2'
import { DbSelect } from '../from/select'

export const TicketAssignModal = () => {
  const [modal2Open, setModal2Open] = useState(false)
  return (
    <>
      <div
        onClick={() => setModal2Open(true)}
        className="flex items-center gap-2 hover:bg-skin-bg-blue p-2 group transition-all w-56">
        <KTIcon iconName="profile-user" className="text-lg group-hover:text-skin-color-blue-light transition-all" />

        <p className="text-sm text-skin-color-1 font-medium  group-hover:text-skin-color-blue-light transition-all">
          Assign
        </p>
      </div>
      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '500px' }}
        onCancel={() => setModal2Open(false)}>
        <div className="py-10">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-skin-color-1"> Ticket Assign</h1>
            <p className="If you need more info, please check Support Guidelines. Subject">
              If you need more info, please check Support Guidelines. Subject
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-5 mt-7">
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Subject *"
            />
            <DbSelect
              inputProps={{
                placeholder: 'Select',
              }}
              label="Assign *"
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
