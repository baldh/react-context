import React from 'react'
import {ThemeContext} from './theme-context'
import './global.css'
export default function App() {
  const {theme, setTheme} = React.useContext(ThemeContext)
  return (
    <main data-theme={theme}>
      <h1>{theme}</h1>
      <button onClick={()=> setTheme(theme => theme === "dark" ? "light" : "dark")}>{theme} mode</button>
    </main>
  )
}