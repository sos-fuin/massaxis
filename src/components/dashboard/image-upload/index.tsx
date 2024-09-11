import type { UploadFile, UploadProps } from 'antd'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import React, { useState } from 'react'

const ImageUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as Blob)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-circle"
        fileList={fileList}
        onChange={onChange}
        maxCount={1}
        onPreview={onPreview}>
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

export default ImageUpload
