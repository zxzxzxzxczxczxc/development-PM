import EmojiFinder from './components/EmojiFinder'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-content">
          <h1>Emoji Finder</h1>
          <p>Find emoji by keywords</p>
        </div>
      </header>

      <EmojiFinder />
    </div>
  )
}

export default App