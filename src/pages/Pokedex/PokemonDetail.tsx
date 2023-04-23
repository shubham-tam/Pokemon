import { useParams } from "react-router-dom";

import { API_URL } from "../../constants/appConfig";
import { useQuery } from "react-query";

const PokemonDetail = () => {
  const pokemonName = useParams();

  console.log("pokemonIndex", pokemonName);

  const { data } = useQuery("currentPokeData", () =>
    fetch(`${API_URL}` + `/${pokemonName?.name}`).then((res) => res.json())
  );

  console.log("data", data);
  return <div>PokemonDetail</div>;
};

export default PokemonDetail;
