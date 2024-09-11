'use client'
import { DbInput2 } from '@/components/dashboard/from/input2'
import { DbSelect } from '@/components/dashboard/from/select'
import { DbTextarea } from '@/components/dashboard/from/textarea'
import DragAndDrop from '@/components/dashboard/upload/drag-drop'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'

const SupportCreate: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Create ticket
      </Button>

      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '822px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div>
            <h1 className="text-xl font-semibold text-skin-color-1 text-center">Create Ticket</h1>

            <div className="mt-5 mb-7">
              <div className="mb-7">
                <DbInput2
                  inputProps={{
                    placeholder: 'Basic usage',
                  }}
                  label="Subject *"
                />
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 ">
                <DbInput2
                  inputProps={{
                    placeholder: 'Basic usage',
                  }}
                  label="Urgency *"
                />
                <DbSelect
                  inputProps={{
                    placeholder: 'Status *',
                  }}
                  label="Name"
                />
              </div>
            </div>

            <div>
              <DbTextarea
                inputProps={{
                  placeholder: 'Details',
                  rows: 6,
                }}
                label="Name"
              />
            </div>

            <div className="my-7  ">
              <DragAndDrop />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SupportCreate
