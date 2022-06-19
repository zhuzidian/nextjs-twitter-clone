import { HiOutlineSparkles } from "react-icons/hi"
import Input from "./Input"

export default function Feed(props) {
  return (
    <div className="max-w-2xl flex-grow border-l border-r border-gray-300 sm:ml-[73px] xl:ml-[370px]">
      <div className="sticky top-0 flex items-center justify-between border-b border-gray-300 bg-white py-2 px-3">
        <h2 className="text-lg font-bold sm:text-xl">最新のツイート</h2>
        <div className="hover-animation flex h-9 w-9 items-center justify-center xl:px-0">
          <HiOutlineSparkles className="h-5" />
        </div>
      </div>

      <Input />
    </div>
  )
}
