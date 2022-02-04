import { MouseEventHandler } from "react"

export type ButtonType = {
	label: string
	className?: string
	type?: "primary" | "secondary" | "ghost"
	size?: "lg" | "md" | "sm"
	onClick?: MouseEventHandler<HTMLButtonElement>
}
