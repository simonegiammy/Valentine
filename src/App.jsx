import { useState } from 'react'
import '@fontsource/press-start-2p'
import './App.css'

function App() {
  const [buttonSize, setButtonSize] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [noButtonText, setNoButtonText] = useState('No')

  const noMessages = [
    "Sei sicura?",
    "Davvero?",
    "Ripensaci...",
    "Eddai!",
    "Per favore?",
    "Ci ripensi?",
    "Ancora no?",
    "Ma dai!",
    "Non essere così!",
    "Un'ultima chance?"
  ]

  const handleNoClick = () => {
    setButtonSize(prev => prev + 0.5)
    const randomIndex = Math.floor(Math.random() * noMessages.length)
    setNoButtonText(noMessages[randomIndex])
  }

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  return (
    <div className="app">
      {!showSuccess ? (
        <>
          <h1 className="title">Vuoi essere la mia valentine?</h1>
          <div className="buttons">
            <button
              className="yes-btn"
              style={{ transform: `scale(${buttonSize})` }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button className="no-btn" onClick={handleNoClick}>
              {noButtonText}
            </button>
          </div>
          <img 
            src="https://media.giphy.com/media/LnKonfpQ44fNvuGLkA/giphy.gif" 
            alt="Cute animated hearts"
            className="heart-gif"
          />
        </>
      ) : (
        <div className="success">
          <h1 className="success-title">Sapevo che avresti detto sì!</h1>
          <img 
            src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif" 
            alt="Heart celebration"
            className="success-gif"
          />
        </div>
      )}
    </div>
  )
}

export default App
