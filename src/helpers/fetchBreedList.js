const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }
  //async functions always returns the promises
  // /React Query expects me to return a promise so no need to write await apiRes,json() as it takes extra milisecond to read it
  return apiRes.json();
};

export default fetchBreedList;
