'use client'
import { DbInput2 } from '@/components/dashboard/from/input2'
import { DbSelect } from '@/components/dashboard/from/select'
import { DbTextarea } from '@/components/dashboard/from/textarea'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'

const AddNewVideoModal: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Add Video
      </Button>

      <Modal
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '550px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div>
            <h1 className="text-xl font-semibold text-skin-color-1 text-center">Add New Video</h1>

            <div className="flex flex-col gap-5">
              <DbInput2
                inputProps={{
                  placeholder: 'Type...',
                }}
                label="Video Title *"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Video Link *"
                />
                <DbSelect
                  inputProps={{
                    placeholder: 'select *',
                  }}
                  label="Category"
                />
              </div>
              <DbTextarea inputProps={{ placeholder: 'Type...', rows: 5 }} label="Details *" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddNewVideoModal
