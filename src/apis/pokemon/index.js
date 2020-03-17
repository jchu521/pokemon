import axios from "axios";
import { pokemonTypeColors } from "../../utils/constant";
const url = process.env.POKE_API;

export const fetchPokemons = (offset = 0, limit = 10) => {
  return axios
    .get(`${url}/pokemon?offset=${offset}&limit=${limit}`)
    .then(res => res.status === 200 && res.data.results)
    .then(data => {
      //https://dev.to/jamesliudotcc/how-to-use-async-await-with-map-and-promise-all-1gb5
      return Promise.all(
        data.map((p, i) => {
          return getPokemonInfo(i + 1).then(d => ({
            ...d,
            img: getPokemonsImage(i + 1),
            typesColor: d.types.map(t => pokemonTypeColors[t.type.name])
          }));
        })
      );
    })
    .catch(err => {
      console.error(err);
    });
};

export const getPokemonsImage = id => {
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
};

export const getPokemonInfo = id => {
  return axios
    .get(`${url}/pokemon/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(err => {
      console.error(err);
    });
};
