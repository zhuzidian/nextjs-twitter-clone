import Link from "next/link"

export default function SidebarLink(props) {
  const { Icon, text, active } = props
  return (
    <div
      className={`flex items-center justify-center xl:justify-start text-xl space-x-3 hover-animation ${
        active && "font-bold"
      }`}
    >
      <Icon size="28" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}
