import { useQuery } from "@tanstack/react-query";
import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdoptedPetContext from "../context/AdoptedPetContex";
import fetchPet from "../helpers/fetchPets";
import Carousel from "./Carousel";
import Modal from "./Modal";
import ErrorBoundary from "../ErrorBoundary";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  //intentionally decalring it and not using it, i do not care what _ it is, i care about setAdoptedPet
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  // ["details", id] will be passed as the queryKey to fetchPet
  // ''details' is a type request, id -> is a query key, index 1 which will be provided to fetchPet.js
  //if you dont have it in your cash, tun the fetchPet
  const results = useQuery(["details", id], fetchPet);
  // isLoading is for the first load. isFetching is for refetching.

  if (results.isError) {
    return <h3>oh no, error </h3>;
  }
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">loading..</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} -{pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>

        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
// export default Details;
