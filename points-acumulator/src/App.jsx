import { useState, useEffect } from 'react'
import './App.css'
import loadIcon from "./assets/loading-icon.gif"
import PointMain from './components/PointMain'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])


  return (
    < >
      <div className='App'>
        {loading ? <img className='loadIcon' src={loadIcon} alt="" /> :
          <PointMain />
        }
      </div>
    </>
  )
}

export default App
