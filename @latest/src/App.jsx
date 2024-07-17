import { useState } from 'react'
import './App.css'
import { puppyList } from './data'

function App() {
  const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId,setFeatPupId] = useState(null);
console.log(puppies)
  return (
    <>
      <div className = "App">
        {
          puppies.map((puppy) => {
            return <p onClick = {() => {}} key={puppy.id}>{puppy.name}
            </p>
          })
        }
      </div>
      
      
    </>
  )
}

export default App
