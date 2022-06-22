import { useEffect, useRef } from "react"
import data from "@emoji-mart/data"

export default function Picker(props = {}) {
  const ref = useRef()

  useEffect(() => {
    import("emoji-mart").then((EmojiMart) => {
      new EmojiMart.Picker({ ...props, data, ref })
    })
  }, [])

  return <div ref={ref} className="absolute mt-[475px]"></div>
}
