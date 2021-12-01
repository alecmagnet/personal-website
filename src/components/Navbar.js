import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Box, Button, Divider, } from '@mui/material'

export default function Navbar() {

	const links = ['projects', 'about', 'résumé', 'academic']
	const navigate = useNavigate()

	const handleClick = (elem) => {
		links.slice(0,2).includes(elem) 
			? navigate(`/#${elem}`)
			: navigate(`/${elem.replaceAll('é', 'e')}`)
	}

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
					{links.map((elem, index) => 
						<Fragment key={index}>
							<Button 
								variant="text" 
								onClick={() => handleClick(elem)}
								sx={{ px: 2, mx: 2, height: 45, color: "text.secondary" }}
							>
								{elem}
							</Button>
							{links.indexOf(elem) === links.length - 1 ?
								null
								: <Divider orientation="vertical" flexItem />	
							}
						</Fragment>
					)}
			</Grid>
		</Grid>
	)
}
