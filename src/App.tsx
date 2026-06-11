import ScanlineOverlay from './components/ScanlineOverlay'
import NavBar from './components/NavBar'
import HeroPartySelect from './components/HeroPartySelect'
import InventoryGrid from './components/InventoryGrid'
import LifeTimeline from './components/LifeTimeline'
import ContactTerminal from './components/ContactTerminal'

export default function App() {
  return (
    <div className="bg-void min-h-screen text-text-primary">
      <ScanlineOverlay />
      <NavBar />
      <main>
        <HeroPartySelect />
        <InventoryGrid />
        <LifeTimeline />
        <ContactTerminal />
      </main>
    </div>
  )
}
