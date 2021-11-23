import { useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import './App.css'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Switch>

        <Route exact path='/resume'>
          <></>
        </Route>

        <Route exact path='/academic'>
          <></>
        </Route>

        <Route exact path='/'>
          <Homepage />
        </Route>

      </Switch>
    </ThemeProvider>
  )
}

export default App;
