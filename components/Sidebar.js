/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

import {
  MdChat,
  MdHome,
  MdTag,
  MdOutlineNotifications,
  MdOutlineInbox,
  MdBookmarkBorder,
  MdOutlineAccountCircle,
  MdMoreHoriz,
} from "react-icons/md"
import SidebarLink from "./SidebarLink"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hover-animation xl:ml-24">
        <MdChat color="rgb(29, 155, 240)" size={30} />
      </div>

      <div className="space-y-2 mt-4 mb-2 xl:ml-24">
        <SidebarLink text="ホーム" Icon={MdHome} active />
        <SidebarLink text="話題を検索" Icon={MdTag} />
        <SidebarLink text="通知" Icon={MdOutlineNotifications} />
        <SidebarLink text="メッセージ" Icon={MdOutlineInbox} />
        <SidebarLink text="ブックマーク" Icon={MdBookmarkBorder} />
        <SidebarLink text="プロフィール" Icon={MdOutlineAccountCircle} />
        <SidebarLink text="もっと見る" Icon={MdMoreHoriz} />
      </div>

      <button className="hidden xl:inline bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white ml-auto rounded-full w-56 h-12 shadow-md">
        ツイートする
      </button>

      <div className="flex items-center justify-center hover-animation mt-auto xl:ml-auto">
        {/* <Image
          src="https://avatars.githubusercontent.com/u/6506853?s=40&v=4"
          alt=""
          className="rounded-full xl:mr-2"
          width={40}
          height={40}
        /> */}

        <img
          src="https://avatars.githubusercontent.com/u/6506853?s=40&v=4"
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />

        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">zidian</h4>
          <p className="text-gray-300">@zidian</p>
        </div>

        <MdMoreHoriz size={30} className="hidden xl:inline ml-10" />
      </div>
    </div>
  )
}
