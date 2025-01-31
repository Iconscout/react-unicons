import { useState } from 'react'
import { UilReact } from '@iconscout/react-unicons'
import Ic0Plus from '@iconscout/react-unicons/icons/uil-0-plus'
import './App.css'

function App() {
  const [size, setSize] = useState(50)
  const [color, setColor] = useState('#61DAFB')

  const colors = [
    '#61DAFB', // React blue
    '#FF4154', // Red
    '#38BDF8', // Sky blue
    '#4ADE80', // Green
    '#A855F7', // Purple
  ]

  return (
    <div className="App">
      <h1>React Unicons Example</h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <UilReact size={size} color={color} />
        <Ic0Plus size={size} color={color} />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSize((s) => s + 10)}>Increase Size</button>
        <button onClick={() => setSize((s) => s - 10)}>Decrease Size</button>
        <p>Current size: {size}px</p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '10px' }}>Select Color:</div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{
                width: '30px',
                height: '30px',
                backgroundColor: c,
                border:
                  c === color ? '2px solid black' : '2px solid transparent',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: 0,
              }}
              aria-label={`Select color ${c}`}
            />
          ))}
        </div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ marginTop: '10px' }}
        />
      </div>

      {/* Test different import methods */}
      <div style={{ marginTop: '40px' }}>
        <h2>Imported Globally</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <UilReact color={color} /> {/* Default size */}
          <UilReact size="40" color={color} /> {/* String size */}
          <UilReact size={60} color={color} /> {/* Number size */}
        </div>
      </div>
    </div>
  )
}

export default App
