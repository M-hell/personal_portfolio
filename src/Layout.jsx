import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'
import Header from './components/Header'
import Footer from './components/Footer'

function Layout() {
  const [themeMode, setThemeMode] = useState("dark")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <Header/>
    <Outlet />
    <Footer />
    </ThemeProvider>
  )
}

export default Layout
