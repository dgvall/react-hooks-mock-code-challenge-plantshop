import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant, setSearch}) {
  return (
    <main>
      <NewPlantForm
      onAddPlant = {onAddPlant}
      />
      <Search setSearch = {setSearch}/>
      <PlantList plants = {plants}/>
    </main>
  );
}

export default PlantPage;
