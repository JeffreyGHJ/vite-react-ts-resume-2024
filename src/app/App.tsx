import TailwindThemeProvider from '@/components/TailwindThemeProvider'
import Home from '@/pages/Home'

function App() {
  return (
    <TailwindThemeProvider>
      <Home />
    </TailwindThemeProvider>
  )
}

export default App
