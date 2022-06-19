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
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hover-animation flex h-14 w-14 items-center justify-center xl:ml-24">
        <MdChat color="rgb(29, 155, 240)" size={30} />
      </div>

      <div className="mt-4 mb-2 space-y-2 xl:ml-24">
        <SidebarLink text="ホーム" Icon={MdHome} active />
        <SidebarLink text="話題を検索" Icon={MdTag} />
        <SidebarLink text="通知" Icon={MdOutlineNotifications} />
        <SidebarLink text="メッセージ" Icon={MdOutlineInbox} />
        <SidebarLink text="ブックマーク" Icon={MdBookmarkBorder} />
        <SidebarLink text="プロフィール" Icon={MdOutlineAccountCircle} />
        <SidebarLink text="もっと見る" Icon={MdMoreHoriz} />
      </div>

      <button className="ml-auto hidden h-12 w-56 rounded-full bg-[#1d9bf0] text-white shadow-md hover:bg-[#1a8cd8] xl:inline">
        ツイートする
      </button>

      <div className="hover-animation mt-auto flex items-center justify-center xl:ml-auto">
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

        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">zidian</h4>
          <p className="text-gray-300">@zidian</p>
        </div>

        <MdMoreHoriz size={30} className="ml-10 hidden xl:inline" />
      </div>
    </div>
  )
}
