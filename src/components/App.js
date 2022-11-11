import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  const displayedPlants = plants
    .filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  function handleAddPlant(newPlant) {
    const newPlants = [...plants, newPlant]
    setPlants(newPlants)
  }

  
  return (
    <div className="app">
      <Header />
      <PlantPage
      onAddPlant = {handleAddPlant}
      plants = {displayedPlants}
      setSearch = {setSearch}
      />
    </div>
  );
}

export default App;
