import { useRef, useEffect, Fragment } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import { Typography, Grid, Box, } from '@mui/material'


export default function Resume() {
	const location = useLocation()
	const reference = useRef()
	const navigate = useNavigate()
	const handleProjectClick = () => {
		navigate('/#projects')
	}

	useEffect(() => {
		if (location.hash.length > 0) reference.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}, [location, reference])

	const isHashElem = (id) => {if (location.hash.includes(id)) return <div ref={reference}/>}



	const expArr = [
		{
			employer: "Success Academy High School of the Liberal Arts",
			location: "New York, NY",
			titles: [
				{
					title: "English Language Arts Teacher and Academic Advisor",
					dates: "July 2020 – June 2021",
				},
			],
			bulletPoints: [
				"In team of 4, adapted American literature curriculum to remote learning",
				"Reviewed outcomes data to revise teaching strategies and raise grades 12% from Q1 to Q4",
			]
		},

		{
			iden: "higher-ed",
			employer: "The City College of New York, CUNY",
			location: "New York, NY",
			titles: [
				{
					title: "Adjunct Lecturer of English",
					dates: "August 2012 – July 2020",
				},
				{
					title: "Graduate Teaching Fellow",
					dates: "August 2008 – July 2012",
				},
			],
			bulletPoints: [
				"Innovated assignments and exercises that influenced teaching across department",
				"Led faculty teams for first-year learning communities",
				"Mentored students and incoming faculty",
				"Consistently scored above 4.5 out of 5 on evaluations",
				"Co-authored reports on writing assignment effectiveness in general education courses",
				"Presented 25 research papers at professional conferences and published two well-reviewed scholarly essays"
			]
		},

		{
			iden: "",
			employer: "Marymount Manhattan College",
			location: "New York, NY",
			titles: [
				{
					title: "Adjunct Professor of Writing",
					dates: "August 2017 – July 2019",
				},
			],
			bulletPoints: [
				"Developed and taught popular seminar using fan media (fic, zines) to convey the techniques of academic writing and research",
				"Engaged students and the wider college community by organizing public events on fandom",
			]
		},

		{
			iden: "",
			employer: "John Jay College of Criminal Justice, CUNY",
			location: "New York, NY",
			titles: [
				{
					title: "Adjunct Instructor of English",
					dates: "August 2012 – December 2012",
				},
				{
					title: "Writing across the Curriculum Fellow",
					dates: "August 2011 – July 2012",
				},
			],
			bulletPoints: [
				"Designed and taught course on gender and sexuality that earned a 4.9 out of 5 on student evaluations",
				"Co-authored report on effectiveness of writing courses; assessed student writing and interviewed students about classroom experiences",
				"Consulted with instructors on improving writing assignments",
			]
		},
	
		{
			iden: "",
			employer: "NAME",
			location: "New York, NY",
			titles: [
				{
					title: "TITLE",
					dates: "August 2012 – July 2020",
				},
			],
			bulletPoints: [
				"POINT",
				"POINT",
				"POINT",
				"POINT",
			]
		},

		{
			iden: "",
			employer: "NAME",
			location: "New York, NY",
			titles: [
				{
					title: "TITLE",
					dates: "August 2012 – July 2020",
				},
			],
			bulletPoints: [
				"POINT",
				"POINT",
				"POINT",
				"POINT",
			]
		},

		{
			iden: "",
			employer: "NAME",
			location: "New York, NY",
			titles: [
				{
					title: "TITLE",
					dates: "August 2012 – July 2020",
				},
			],
			bulletPoints: [
				"POINT",
				"POINT",
				"POINT",
				"POINT",
			]
		},






		{
			iden: "",
			employer: "NAME",
			location: "New York, NY",
			titles: [
				{
					title: "TITLE",
					dates: "August 2012 – July 2020",
				},
			],
			bulletPoints: [
				"POINT",
				"POINT",
				"POINT",
				"POINT",
			]
		},
	]

	return (
		<Grid container spacing={2} justifyContent="center">

			<Grid item xs={12}>
				<Typography variant="h1" align="center" sx={{ letterSpacing: "7px"}}>
					Résumé
				</Typography>
			</Grid>

			<Grid item xs={12} md={11} xl={10} >
				<Typography variant="body2" align="center" sx={{ mt: "-10px"}}>
					Download a PDF (coming soon)
				</Typography>
				
				<Typography variant="h4" align="center" sx={{ mt: 4, mb: 1, }}>
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

				{isHashElem('experience')}
				<Typography variant="h4" align="center" sx={{ mt: 4, mb: 1, }}>
					Experience 
				</Typography>

				{expArr.map((elem, index) => 
					<Fragment key={index}>
						{elem.iden === "" ? null : isHashElem(elem.iden)}
						<Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, }}>
							{elem.employer}
							<Box component="span" sx={{ float: "right", fontWeight: "normal" }}>
								{elem.location}
							</Box>
						</Typography>
						{elem.titles.map(el => 
							<Typography variant="h6" sx={{ fontWeight: "normal" }}>
								{el.title}
								<Box component="span" sx={{ float: "right", }}>
									{el.dates}
								</Box>
							</Typography>
						)}
						<Typography variant="body1" component="div">
							<ul style={{ marginTop: 0}}>
								{elem.bulletPoints.map(point => 
									<li>{point}</li>	
								)}
							</ul>
						</Typography>
					</Fragment>
				)}








 			</Grid>
		</Grid>
	)
}