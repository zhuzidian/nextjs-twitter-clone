/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // EmojiPickerが2回レンダリングされるため暫定措置としてfalseにする
  images: {
    domains: [
      "rb.gy",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
      "w.wallhaven.cc",
    ],
  },
}

module.exports = nextConfig
