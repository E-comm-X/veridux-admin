"use client"
import { createContext, useEffect, useState } from "react"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react"
import { cloudinary_config } from "@/constants/CloudinaryConfig"
import { Button } from "antd"

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext({ loaded: false })

function CloudinaryUploadWidget() {
  const [publicId, setPublicId] = useState("")
  const [cloudName] = useState(cloudinary_config.public_name)
  const [uploadPreset] = useState("aoh4fpwm")
  const [loaded, setLoaded] = useState(false)
  const [uwConfig] = useState({
    cloudName,
    // uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    tags: ["Veridux"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  })

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  })

  const myImage = cld.image(publicId)

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw")
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script")
        script.setAttribute("async", "")
        script.setAttribute("id", "uw")
        script.src = "https://upload-widget.cloudinary.com/global/all.js"
        script.addEventListener("load", () => setLoaded(true))
        document.body.appendChild(script)
      } else {
        // If already loaded, update the state
        setLoaded(true)
      }
    }
  }, [loaded])

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      // @ts-ignore
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info)
            setPublicId(result.info.public_id)
          }
        }
      ) as any

      document?.getElementById("upload_widget")?.addEventListener(
        "click",
        function () {
          myWidget?.open() as any
        },
        false
      ) as any
    }
  }

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <Button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload Image
      </Button>
    </CloudinaryScriptContext.Provider>
  )
}

export default CloudinaryUploadWidget
export { CloudinaryScriptContext }
