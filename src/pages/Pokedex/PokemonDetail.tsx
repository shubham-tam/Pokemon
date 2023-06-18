import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { API_URL } from "../../constants/appConfig";

import { Title } from "../../components";
import { Stats, PokemonImages, Abilities } from "../../components/UI/Pokemon";
import { useEffect } from "react";

const PokemonDetail = () => {
  // const pokemonName = useParams();

  // const navigate = useNavigate();

  // const location = useLocation();

  // const { name: pokemonName } = useParams();
  // const { search } = useLocation();
  // const queryParams = new URLSearchParams(search);
  // const region = queryParams.get("region");

  // // const region = new URLSearchParams(location.search).get("region");

  // console.log("pokemonName", pokemonName);

  // // const { region, name } = useParams<{ region: string; name: string }>();

  // // const { name, region } = useParams<{ name: string; region: string }>();

  // const { data } = useQuery(
  //   ["pokeData", name],
  //   (): Promise<any> => fetch(`${API_URL}/${name}`).then((res) => res.json())
  // );

  // // console.log("pokemonName", pokemonName);

  // const region = pokemonName?.region?.toLowerCase();

  const pokemonName = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const region = queryParams.get("region");
  // const href = (link as HTMLAnchorElement).href;

  const { data } = useQuery(
    ["pokeData", pokemonName],
    (): Promise<any> =>
      fetch(`${API_URL}/${pokemonName}`).then((res) => res.json())
  );

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const region = pokemonName?.region?.toLowerCase();
    if (region && currentUrl.searchParams.get("region") !== region) {
      currentUrl.searchParams.set("region", region);
      window.history.replaceState(null, "", currentUrl.toString());
    }
  }, [pokemonName?.region]);

  return (
    <>
      <Link id="backButton" to={`/pokedex/?region=${region?.toLowerCase()}`}>
        &larr; <span>Back to {region?.toLowerCase()} pokemon</span>
      </Link>
      <div>
        <Title title={data?.name} identifier="name" />
        <PokemonImages sprites={data?.sprites} key={data?.id} />
        <Abilities abilities={data?.abilities} />
        <br />
        <Stats stats={data?.stats} />
      </div>
    </>
  );
};

export default PokemonDetail;
