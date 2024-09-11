'use client'
import { Button, Modal } from 'antd'
import { ButtonType } from 'antd/es/button'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { useState } from 'react'
import { DbInput2 } from '../from/input2'
import { DbSelect } from '../from/select'

export const CreateRoleModal = ({
  btnType,
  btnText,
  btnSize,
  step,
}: {
  btnType: ButtonType
  btnText: string
  btnSize: SizeType
  step: 'View' | 'Edit' | 'Create'
}) => {
  const [modal2Open, setModal2Open] = useState(false)
  return (
    <>
      <Button size={btnSize} onClick={() => setModal2Open(true)} type={btnType}>
        {btnText}
      </Button>
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
            <h1 className="text-xl font-semibold text-skin-color-1">{step} Role</h1>
            <p className="If you need more info, please check Support Guidelines. Subject">
              If you need more info, please check Support Guidelines. Subject
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-5 mt-7">
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Rolls name *"
            />
            <DbSelect
              inputProps={{
                placeholder: 'Select',
              }}
              label="Role Permissions"
            />
          </div>
        </div>
      </Modal>
    </>
  )
}
