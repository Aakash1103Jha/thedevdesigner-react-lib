import React from "react"
import { NavbarType } from "./Navbar.types"
import "./Navbar.css"

const Navbar: React.FC<NavbarType> = (props) => {
	const { children, className, type, styles, items } = props
	console.log({ items })
	return (
		<nav
			className={`navbar
                        ${className ? className : ""}
                        ${type ? `navbar-${type}` : ""}
                        `}
			style={styles}>
			{children}
		</nav>
	)
}

export default Navbar
