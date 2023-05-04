import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2> No pets found, sorry</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              locations={`${pet.city}, ${pet.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
