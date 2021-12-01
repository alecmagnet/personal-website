import { Grid, Box, Button, Divider, } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Navbar() {

	const links = ['projects', 'about', 'résumé', 'academic']


	return (
			<Grid container columnSpacing={2} justifyContent="center">
			<Grid item xs="auto">
				<Box component="span" sx={{ 
				fontWeight: "bold", 
				fontSize: 'h3.fontSize',
			}}>
				Alec Magnet 
			</Box>
			</Grid>
			<Grid item xs="auto">
				<Box component="span" sx={{ 
				fontWeight: "light", 
				fontSize: 'h3.fontSize',
			}}> 
					is a software engineer
				</Box>
			</Grid>
			<Grid item container xs={12} justifyContent="center" sx={{ mt:-1 }}>
					{links.map(el => 
						<>
							<Button variant="text" sx={{ px: 2, mx: 2, height: 50, color: "text.secondary" }}>
								{el}
							</Button>
							{links.indexOf(el) === links.length - 1 ?
								null
								: <Divider orientation="vertical" flexItem />	
							}
						</>	
					)}
			</Grid>
			{/* <Grid item container xs={12} justifyContent="center" sx={{ mt:1 }}>
				<Divider width="75%" />
			</Grid> */}
		</Grid>
	)
}
