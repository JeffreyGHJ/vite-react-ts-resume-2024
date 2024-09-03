import { useEffect, useState } from 'react'
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const ThemeSwitcher = () => {
  const [themeIcon, setThemeIcon] = useState(<SunIcon />)

  const updateThemeIcon = () => {
    /* check localstorage BEFORE trying matchMedia */
    if (localStorage.theme === 'dark')
      setThemeIcon(<MoonIcon width={28} height={28} />)
    else if (localStorage.theme === 'light')
      setThemeIcon(<SunIcon width={28} height={28} />)
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      setThemeIcon(<MoonIcon width={28} height={28} />)
    else if (window.matchMedia('(prefers-color-scheme: light)').matches)
      setThemeIcon(<SunIcon width={28} height={28} />)
    else setThemeIcon(<SunIcon width={28} height={28} />)
  }

  useEffect(() => {
    updateThemeIcon()
  }, [])

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')

    updateThemeIcon()
  }

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')

    updateThemeIcon()
  }

  const setDefaultTheme = () => {
    localStorage.removeItem('theme')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')

    updateThemeIcon()
  }

  return (
    <div className="absolute right-4 top-4">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="border border-secondary"
          >
            {themeIcon}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4">
          <DropdownMenuLabel>Themes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="transition-colors duration-300 cursor-pointer gap-x-2 hover:bg-accent"
            onClick={() => setLightTheme()}
          >
            <SunIcon />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="transition-colors duration-300 cursor-pointer gap-x-2 hover:bg-accent"
            onClick={() => setDarkTheme()}
          >
            <MoonIcon />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="transition-colors duration-300 cursor-pointer gap-x-2 hover:bg-accent"
            onClick={() => setDefaultTheme()}
          >
            <DesktopIcon />
            System Default
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ThemeSwitcher
