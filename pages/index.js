import Head from "next/head"
import Image from "next/image"
import Feed from "../components/Feed"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[1000px]">
        <Sidebar />
        <Feed />
      </main>
    </div>
  )
}
