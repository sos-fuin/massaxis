import { DbInput2 } from '@/components/dashboard/from/input2'
import Label from '@/components/dashboard/from/label'
import { DbSelect } from '@/components/dashboard/from/select'
import { KTIcon } from '@/helper/icon'
import { DatePicker, Divider, Modal } from 'antd'
import React, { useState } from 'react'

const AddDeal: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <button className="text-3xl text-center" onClick={() => setModal2Open(true)}>
        <KTIcon iconName="plus-circle" className="text-skin-color-blue-light" />
      </button>
      <Modal
        // title="Add Deal"
        centered
        open={modal2Open}
        width={'100%'}
        className="db-modal"
        onOk={() => setModal2Open(false)}
        style={{ maxWidth: '858px' }}
        onCancel={() => setModal2Open(false)}>
        <div>
          <div className="text-center">
            <p className="text-xl text-skin-color-1 font-semibold ">Add Deal</p>
            <p className="text-sm text-skin-color-3 font-medium">
              If you need more info, please check Support Guidelines. Subject
            </p>
          </div>

          <div className="!mt-10">
            <p className="text-lg text-skin-color-1 font-semibold ">Person</p>
            <p className="text-sm text-skin-color-3 font-medium">
              If you need more info, please check Support Guidelines. Subject
            </p>
          </div>

          <div className="mt-11">
            <div className="flex gap-7 items-end">
              <div className="flex-1 flex items-center gap-2 flex-col sm:flex-row">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Phone Number"
                />
                <DbSelect
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Select Type"
                />
              </div>

              <button className="db-button-primary outline w-[110px]">
                <span className="icon">
                  <KTIcon iconName="plus-square" iconType="outline" />
                </span>
                <span>Add phone</span>
              </button>
            </div>
            <div className="flex gap-7 items-end mt-5">
              <div className="flex-1 flex items-center gap-2 flex-col sm:flex-row">
                <DbInput2
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Email ID"
                />
                <DbSelect
                  inputProps={{
                    placeholder: 'Type...',
                  }}
                  label="Select Type"
                />
              </div>

              <button className="db-button-primary outline w-[110px]">
                <span className="icon">
                  <KTIcon iconName="plus-square" iconType="outline" />
                </span>
                <span>Add Email</span>
              </button>
            </div>
          </div>

          <Divider className="!mt-[35px] mb-7" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] !mt-8">
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Contact person"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Title"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Address"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Value"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="City"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="State"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Zip"
            />
            <DbInput2
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Country"
            />
            <DbSelect
              inputProps={{
                placeholder: 'Type...',
                mode: 'multiple',
              }}
              label="Tags"
            />
            <DbSelect
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Owner"
            />
            <div className="flex gap-3 flex-col w-full">
              <Label label="Date" />
              <DatePicker size="large" />
            </div>
            <DbSelect
              inputProps={{
                placeholder: 'Type...',
              }}
              label="Visible to"
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default AddDeal
