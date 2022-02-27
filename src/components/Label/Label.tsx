import React from "react"
import "./Label.css"
import { LabelType } from "./Label.types"

const Label: React.FC<LabelType> = (props) => {
	const { text, type = "message", className, styles } = props

	return (
		<label className={`label ${type} ${className}`} style={styles}>
			{text}
		</label>
	)
}

export default Label
