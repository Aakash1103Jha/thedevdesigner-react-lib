import React from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"

const Button: React.FC<ButtonType> = (props) => {
	const { label, className, type, onClick } = props
	return (
		<button
			className={`button ${className ? className : null} ${type ? type : null}`}
			onClick={onClick}>
			{label}
		</button>
	)
}

export default Button
