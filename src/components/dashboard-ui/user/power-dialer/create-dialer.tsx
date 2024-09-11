import { DbTextarea } from '@/components/dashboard/from/textarea'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'

const CreatePowerDialer: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
        Create Power Dialer
      </Button>
      <Modal
        title="Script"
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '858px' }}
        onCancel={() => setModal2Open(false)}>
        <div className="mt-5">
          <DbTextarea inputProps={{ placeholder: 'Script', rows: 10 }} label="Right your script" />
        </div>
      </Modal>
    </>
  )
}

export default CreatePowerDialer
