import React from "react";

function NewPlantForm({onAddPlant}) {

  function handleAddPlant(e) {
    e.preventDefault()

    const newPlant = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value,
    }

    fetch(" http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then(res => res.json())
      .then(data => onAddPlant(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleAddPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
