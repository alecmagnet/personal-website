import { Typography, Grid, Box, } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Navbar() {

	const links = ['Projects', 'Bio', 'Resume', 'Academic']

	let subTitleSx = {
		fontWeight: 'light', 
		fontSize: 'h3.fontSize',
	}

	// window.addEventListener("resize", function() {
  // 	if (window.matchMedia("(max-width: 928px)").matches) {
	// 		subTitleSx = {
	// 			fontWeight: 'light', 
	// 			fontSize: 'h5.fontSize',
	// 			mt: "-2"
	// 		}
	// 	}
	// })

	return (
			<Grid container columnSpacing={2} justifyContent="center" >
			<Grid item xs="auto">
				<Box component="span" sx={{ 
				fontWeight: "bold", 
				fontSize: 'h3.fontSize',
				pb:0, mb:0 
			}}>
				Alec Magnet 
			</Box>
			</Grid>
			<Grid item xs="auto">
				<Box component="span" sx={subTitleSx}> is a software engineer</Box>
			</Grid>
			<Grid item xs={12}>

			</Grid>
		</Grid>
	)
}
