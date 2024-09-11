import DragAndDrop from '@/components/dashboard/upload/drag-drop'
import { Modal } from 'antd'
import React, { useState } from 'react'

const UserImportCreateList: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <button className="db-button-out" onClick={() => setModal2Open(true)}>
        Import Create List
      </button>
      <Modal
        title="Choose import type"
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '822px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div>
            <h1 className="text-xl font-semibold text-skin-color-1">How would you like to add contacts?</h1>
            <p className="text-sm font-medium text-skin-color-3 ">
              Build your Mailchimp audience by adding or importing contacts you already have permission to market to.
            </p>
          </div>
          <div className="mt-5 mb-7">
            <DragAndDrop />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserImportCreateList
