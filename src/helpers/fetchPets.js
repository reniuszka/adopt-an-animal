const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  //async functions always returns the promises
  // /React Query expects me to return a promise so no need to write await apiRes,json() as it takes extra milisecond to read it
  return apiRes.json();
};

export default fetchPet;
