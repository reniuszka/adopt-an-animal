import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "../context/AdoptedPetContex";
import Results from "./Results";
import useBreedList from "../hooks/useBreedList";
import fetchSearch from "../helpers/fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  //animal must be controlled input as it is important
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //uncontrolled form - browser takes care of it
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}

        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" name="breed">
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

// import React, { useState, useEffect } from "react";
// import Pet from "./Pet";
// import useBreedList from "./hooks/useBreedList";
// import Results from "./Results";

// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// const breeds = [];
// const SearchParams = () => {
//   const [location, setLocation] = useState("");
//   const [animal, setAnimal] = useState("");
//   const [breed, setBreed] = useState("");
//   const [pets, setPets] = useState([]);
//   const [breeds] = useBreedList(animal);

//   // destructering above is a shorthand of this:
//   // const locationHook = useState('')
//   // const location = locationHook[0]
//   // const SetLocation = locationHook[1]
//   // const location = "Seattle, WA"; //instead of this we use hook to change its value

//   useEffect(() => {
//     requestPets();
//   }, []);

//   async function requestPets() {
//     const response = await fetch(
//       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&bread=${breed}`
//     );
//     const data = await response.json();
//     setPets(data.pets);
//   }
//   return (
//     <div className="search-params">
//       {/* //controlled form  */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           requestPets();
//         }}
//       >
//         <label htmlFor="location">
//           Location
//           <input
//             id="location"
//             value={location}
//             placeholder="Salt Lake City"
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </label>

//         <label htmlFor="animal">
//           Animal
//           <select
//             id="animal"
//             value={animal}
//             onChange={(e) => {
//               setAnimal(e.target.value);
//               setBreed("");
//             }}
//           >
//             <option />
//             {/* //implicit return without curly brackets and return  */}
//             {ANIMALS.map((animal) => (
//               <option key={animal}>{animal}</option>
//             ))}
//           </select>
//         </label>

//         <label htmlFor="breed">
//           Breed
//           <select
//             id="breed"
//             value={breed}
//             disabled={breeds.length === 0}
//             onChange={(e) => setBreed(e.target.value)}
//           >
//             <option />
//             {/* //implicit return without curly brackets and return  */}
//             {breeds.map((breed) => (
//               <option key={breed}>{breed}</option>
//             ))}
//           </select>
//         </label>

//         <button>Submit</button>
//       </form>
//       <Results pets={pets} />

//       {/* {pets.map((pet) => {
//         return (
//           <Pet
//             key={pet.id}
//             name={pet.name}
//             animal={pet.animal}
//             breed={pet.breed}
//           />
//         );
//       })} */}
//     </div>
//   );
// };

// export default SearchParams;
