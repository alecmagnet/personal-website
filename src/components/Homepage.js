import { useRef, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { Grid } from '@mui/material'
import Projects from "./Projects"
import About from "./About"

export default function Homepage() {
	const location = useLocation()
	const reference = useRef()

	useEffect(() => {
		if (location.hash.length > 0) reference.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}, [location, reference])

	const isHashElem = (id) => {if (location.hash.includes(id)) return <div ref={reference}/>}

	return (
		<Grid container spacing={2}>

			{isHashElem('projects')}
			<Grid id="projects" item container sx={12} justifyContent="center">
				<div >
					<Projects />
				</div>
			</Grid>

			{isHashElem('about')}
			<Grid id="about" item container sx={12} justifyContent="center">
				<div >
					<About />
				</div>
			</Grid>

		</Grid>
	)
}