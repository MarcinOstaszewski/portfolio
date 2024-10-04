import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Slider from './components/Slider'

function App() {

  return (
    <div className="w-full h-full max-w-3xl mx-auto my-4">
      <Header />
      <Slider />
      <AboutMe />
    </div>
  )
}

export default App
