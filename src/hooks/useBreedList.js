import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import fetchBreedList from "../helpers/fetchBreedList";
// cashing and not making too many requests
// const localCash = {};
//it changes based on animal
const useBreedList = (animal) => {
  const results = useQuery(["breeds", animal], fetchBreedList);
  //if results if available give me that, if not, dont give me an error. if results or data is empty give me an empty array
  return [results?.data?.breeds ?? [], results.status];
  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState("unloaded");

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCash[animal]) {
  //     console.log("localCash[animal] details", localCash[animal]);
  //     setBreedList(localCash[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatus("loading");

  //     const response = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const data = await response.json();
  //     // localCash[animal] => localCash['dog'];
  //     //{dog: breeds{}}
  //     console.log("localCash[animal]:", localCash[animal]); //localCash[animal]: undefined
  //     localCash[animal] = data.breeds || []; //localCash[animal]: Array(9)[("American Shorthair","American Longhair","British Shorthair"...];
  //     console.log("local cash:", localCash); //reptile: Array [ "Iguana", "Horned Lizard" ]0: "Iguana",1: "Horned Lizard",length: 2
  //     setBreedList(localCash[animal]); //[ "Iguana", "Horned Lizard" ]
  //     setStatus("loaded");
  //   }
  // }, [animal]);

  // return [breedList, status];
};

export default useBreedList;
