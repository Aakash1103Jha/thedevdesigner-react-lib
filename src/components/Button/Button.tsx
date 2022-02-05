import React from "react"
import { ButtonType } from "./Button.types"
import "./Button.css"

const Button: React.FC<ButtonType> = (props) => {
	const { label, className, btnType, onClick, size, rounded, isActive, styles, isDisabled } =
		props
	return (
		<button
			className={`button
						${className ? className : null}
						${btnType ? btnType : null}
						${size ? `button-${size}` : null}
						${`button-${rounded}`}
						${isActive === true ? "active" : null}
						${isDisabled === true ? "disabled" : null}
					`}
			disabled={isDisabled ?? false}
			onClick={onClick}
			style={styles}>
			{label}
		</button>
	)
}

export default Button
