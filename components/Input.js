import { useRef, useState } from "react"
import dynamic from "next/dynamic"

import {
  HiCalendar,
  HiChartBar,
  HiEmojiHappy,
  HiPhotograph,
  HiX,
} from "react-icons/hi"

const EmojiPicker = dynamic(() => import("./EmojiPicker"), {
  ssr: false,
})

export default function Input(props) {
  const [value, setValue] = useState("")
  const [selectedFile, setSelectedFile] = useState(
    "https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg"
  )
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const filePickerRef = useRef()

  function addImageToPost() {
    console.log("addImageToPost")
  }

  return (
    <div className={`flex space-x-3 border-b border-gray-300 p-3`}>
      <img
        src="https://avatars.githubusercontent.com/u/6506853?s=40&v=4"
        alt=""
        className="h-10 w-10 rounded-full xl:mr-2.5"
      />

      <div className="w-full divide-y divide-gray-300">
        <div>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={2}
            placeholder="いまどうしてる？"
            className="min-h-[50px] w-full bg-transparent text-lg tracking-wide outline-none"
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-opacity-70 hover:bg-blue-100"
                onClick={() => setSelectedFile(null)}
              >
                <HiX className="h-5 text-white" />
              </div>
              <img
                src="https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg"
                alt=""
                className="max-h-80 rounded-2xl object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <HiPhotograph className="text-[#1d9bf0]" />

              <input
                type="file"
                hidden
                ref={filePickerRef}
                onChange={addImageToPost}
              />
            </div>

            <div className="icon rotate-90">
              <HiChartBar className="text-[#1d9bf0]" />
            </div>

            <div
              className="icon"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <HiEmojiHappy className="text-[#1d9bf0]" />
            </div>

            <div className="icon">
              <HiCalendar className="text-[#1d9bf0]" />
            </div>

            {showEmojiPicker && <EmojiPicker />}
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  )
}
