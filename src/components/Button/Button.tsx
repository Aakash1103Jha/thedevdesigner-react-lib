import React from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"

const Button: React.FC<ButtonType> = (props) => {
	const { label, className, type, onClick, size } = props
	return (
		<button
			className={`button ${className ? className : null} ${type ? type : null} ${
				size ? `button-${size}` : null
			}`}
			onClick={onClick}>
			{label}
		</button>
	)
}

export default Button
