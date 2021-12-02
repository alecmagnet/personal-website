import { useNavigate } from 'react-router-dom'
import { Typography, Grid, Box, } from '@mui/material'


export default function Resume() {
	const navigate = useNavigate()
	const handleProjectClick = () => {
		navigate('/#projects')
	}

	return (
		<Grid container spacing={2} justifyContent="center">

			<Grid item xs={12}>
				<Typography variant="h1" align="center" sx={{ letterSpacing: "7px"}}>
					Résumé
				</Typography>
			</Grid>

			<Grid item xs={12} sm={11} md={10} lg={9} xl={8} >
				<Typography variant="body2" align="center" sx={{ mt: "-10px"}}>
					Download a PDF (coming soon)
				</Typography>
				
				<Typography variant="h6" align="center" sx={{ mt: 4, mb: 1, }}>
					Full-Stack Software Engineer 
				</Typography>				
				<Typography variant="body1">
					Coding is sorcery. So are writing and teaching. All three use language to change the world. I have extensive experience as a teacher and writer, with a proven record of making complex ideas understandable, exciting, and even beautiful. As a software engineer, I apply that magic to communicating with computers, my fellow coders, and the user. All of these have needs and confusions that my experience with students and readers help me anticipate, problem-solve, and address.  
				</Typography> 

				<Typography variant="h6" align="center" sx={{ mt: 4, mb: 1, }}>
					Technical Skills 
				</Typography>
				<Typography variant="body1">
					JavaScript, React, Redux, Ruby on Rails, SQL, HTML, CSS, MUI, GIT  
				</Typography>

				<Typography variant="h6" align="center" sx={{ mt: 4, mb: 1, }}>
					Technical <Box 
						component="span" 
						className="txtLink" 
						onClick={handleProjectClick}
						sx={{ cursor: "pointer"}}
					>
						Projects
					</Box> 
				</Typography>
				<Typography variant="body1">
					Coming soon...  
				</Typography>

				{/* <Typography variant="h6" align="center" sx={{ mt: 4, mb: 1, }}>
					Technical Experience 
				</Typography>
				<Typography variant="body1" sx={{ fontWeight: "bold"}}>
					Turn the Bus  
					<Box component="span" sx={{ float: "right", fontWeight: "normal" }}>
						Remote
					</Box>  
				</Typography> */}

				<Typography id="experience" variant="h6" align="center" sx={{ mt: 4, mb: 1, }}>
					Experience 
				</Typography>
				<Typography variant="body1" sx={{ fontWeight: "bold"}}>
					Success Academy High School of the Liberal Arts
					<Box component="span" sx={{ float: "right", fontWeight: "normal" }}>
						New York, NY
					</Box>
				</Typography>
				<Typography variant="body1" component="div">
					English Language Arts Teacher and Academic Advisor
					<Box component="span" sx={{ float: "right", }}>
						July 2020 – June 2021
					</Box>
					<ul style={{ marginTop: 0}}>
						<li>In team of 4, adapted American literature curriculum to remote learning</li>
						<li>Reviewed outcomes data to revise teaching strategies and raise grades 12% from Q1 to Q4</li>
					</ul>
				</Typography>


				<Typography variant="h6" sx={{ mt: 5, color: "magenta" }}>TEMPLATE</Typography>

				<Typography variant="body1" sx={{ fontWeight: "bold"}}>
					Employer
					<Box component="span" sx={{ float: "right", fontWeight: "normal" }}>
						New York, NY
					</Box>
				</Typography>
				<Typography variant="body1" component="div">
					Position
					<Box component="span" sx={{ float: "right", }}>
						July 2020 – June 2021
					</Box>
					<ul style={{ marginTop: 0}}>
						<li>Bullet</li>
						<li>Bullet</li>
					</ul>
				</Typography>

 			</Grid>
		</Grid>
	)
}