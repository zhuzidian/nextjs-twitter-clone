import { HiOutlineSparkles } from "react-icons/hi"

export default function Feed(props) {
  return (
    <div className="sm:ml-[73px] xl:ml-[370px] border-l border-r border-gray-300 flex-grow max-w-2xl">
      <div className="flex items-center justify-between py-2 px-3 sticky top-0 bg-white border-b border-gray-300">
        <h2 className="text-lg sm:text-xl font-bold">最新のツイート</h2>
        <div className="hover-animation w-9 h-9 flex items-center justify-center xl:px-0">
          <HiOutlineSparkles className="h-5" />
        </div>
      </div>
    </div>
  )
}
