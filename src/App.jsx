import { useState } from 'react'
import './App.css'
import Country from './components/Country'

const medals = [
  { id: 1, name: "gold" },
  { id: 2, name: "silver" },
  { id: 3, name: "bronze" },
];

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ])

  function deleteCountry(id) {
    setCountries((currentCountries) => 
      currentCountries.filter((country) => country.id !== id)
    )
  }

  return (
    <main className="app">
      {countries.map((country) => (
        <Country 
          key={country.id}
          id={country.id}
          name={country.name}
          gold={country.gold}
          medals={medals}
          onDelete={deleteCountry}
        />
      ))}
    </main>
  )
}

export default App
