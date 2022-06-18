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
    <div className={`border-b border-gray-300 p-3 flex space-x-3`}>
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
            className="bg-transparent outline-none text-lg tracking-wide w-full min-h-[50px]"
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 hover:bg-blue-100 bg-opacity-70 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <HiX className="text-white h-5" />
              </div>
              <img
                src="https://w.wallhaven.cc/full/y8/wallhaven-y8622k.jpg"
                alt=""
                className="rounded-2xl max-h-80 object-contain"
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
