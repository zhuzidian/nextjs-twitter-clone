import Head from "next/head"
import Image from "next/image"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="min-h-screen flex mx-auto max-w-[1000px]">
        <Sidebar />
      </main>
    </div>
  )
}
