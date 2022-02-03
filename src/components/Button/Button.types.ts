import { MouseEventHandler } from "react"

export type ButtonType = {
	label: string
	className?: string
	type?: "primary" | "secondary" | "ghost"
	onClick?: MouseEventHandler<HTMLButtonElement>
}
