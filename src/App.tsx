import './App.css'
import CDChatBody from './components/CDChatBody/CDChatBody'
import CDSideBar from './components/CDSideBar/CDSideBar'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="d-flex">
          <CDSideBar />
          <CDChatBody />
        </div>
      </div>
    </div>
  )
}

export default App
