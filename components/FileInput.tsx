"use client"
import React from "react"
import type { UploadProps } from "antd"
import { Button, message, Upload } from "antd"
import { FileUpload } from "@mui/icons-material"

const { Dragger } = Upload

interface FileInputProps extends UploadProps {}

const props: UploadProps = {
  name: "file",
  multiple: true,
  // action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file
    if (status !== "uploading") {
      console.log(info.file, info.fileList)
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files)
  },
}

const FileInput: React.FC<FileInputProps> = ({ ...container_props }) => {
  const props_ = { container_props, props }
  return (
    <Dragger {...props_}>
      <p className="ant-upload-drag-icon">
        <FileUpload />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <Button className="mt-[1rem]">Add Image</Button>
    </Dragger>
  )
}

export default FileInput
