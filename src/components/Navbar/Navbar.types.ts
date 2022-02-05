import { ReactNode } from "react"

type ItemType = {
	label: string
	func?: () => {}
}

export type NavbarType = {
	children: ReactNode
	className?: string
	type?: "top" | "left"
	styles: object
	items: ItemType
}
