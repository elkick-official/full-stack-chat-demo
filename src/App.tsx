import CDChatBody from './components/CDChatBody/CDChatBody'
import CDSideBar from './components/CDSideBar/CDSideBar'

import './App.css'

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
