import React from "react"
import ReactDOM from "react-dom/client"
import ThemeContextProvider from './theme-context'
import App from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  </React.StrictMode>
)