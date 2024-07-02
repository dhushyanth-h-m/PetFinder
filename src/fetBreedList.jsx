const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`Breeds/${animal} failed with status ${apiRes.status}`);
  }

  return apiRes.json();
};

export default fetchBreedList;
