import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome text-white">
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App
