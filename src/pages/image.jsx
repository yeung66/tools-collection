import { addWhiteBackground } from "@/utils/image"
import Head from "next/head"
import React, { useRef, useState } from "react"

const ImageProcess = () => {
    const inputRef = useRef(null)
    const [result, setResult] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const [tips, setTips] = useState("")

    const handleUploadClick = () => {
        inputRef.current.click()
    }

    const handleDrop = (event) => {
        event.preventDefault()
        const fileList = Array.from(event.dataTransfer.files)
        const file = fileList[0]
        processFile(file)
    }

    const handleDragOver = (event) => {
        event.preventDefault()
    }

    const processFile = (file) => {
        // check if file is image
        if (!file.type.startsWith("image/")) {
            return
        }

        setResult(null)
        setImageFile(file)
        setTips("Image uploaded")
    }

    const handleInputChange = (e) => {
        const file = e.target.files[0]
        processFile(file)
        
    }

    const addBackgroundHandler = () => {
        if (!imageFile) {
            setTips("Please upload an image first")
            return
        }
        addWhiteBackground(imageFile).then((imageUrl) => {
            setResult(imageUrl)
        }).catch((error) => {
            setTips("error on add white background for the image: " + error)
        })
    }

    return (
        <>
            <Head>
                <title>Image Process - YeungYeah&apos;s tool collection</title>
            </Head>
            <div className="flex flex-col justify-center items-center max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
                <h2 className="py-2 my-2 text-xl font-bold">
                    图片处理工具合集
                </h2>

                <div
                    onClick={handleUploadClick}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <input
                        type="file"
                        ref={inputRef}
                        style={{ display: "none" }}
                        onChange={handleInputChange}
                    />
                    Click or drag files to upload
                    
                </div>

                <button className="py-2 px-5 my-3 border-emerald-300 bg-orange-300 rounded-lg" onClick={addBackgroundHandler}>
                    添加白色背景
                </button>

                {result && <img src={result} alt="uploaded image" className="w-2/3"/>}

                {tips && <div className="text-gray-500">{tips}</div>}
            </div>
        </>
    )
}

export default ImageProcess
