import Link from "next/link"

export default function SidebarLink(props) {
  const { Icon, text, active } = props
  return (
    <div
      className={`hover-animation flex items-center justify-center space-x-3 text-xl xl:justify-start ${
        active && "font-bold"
      }`}
    >
      <Icon size="28" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}
