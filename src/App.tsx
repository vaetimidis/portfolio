import Resume from './components/Resume'
import { LanguageProvider } from './lib/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <Resume />
    </LanguageProvider>
  )
}
