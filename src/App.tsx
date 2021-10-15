import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Web Extension made with Vite and React</p>
        <div>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
