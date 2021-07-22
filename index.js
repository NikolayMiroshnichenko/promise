const setPendding = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
};

const fetchPokemon = (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => setPendding(data));
};

const datalinks = [
  "https://pokeapi.co/api/v2/pokemon/ditto",
  "https://pokeapi.co/api/v2/pokemon/1",
];

datalinks.forEach(async (item) => {
  const data = await fetchPokemon(item);
  console.log(data);
});
