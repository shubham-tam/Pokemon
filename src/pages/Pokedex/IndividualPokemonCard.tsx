import { Link } from "react-router-dom";

interface IndividualPokemonCard {
  pokemon: {
    name?: string;
    url?: string;
  };
  pokeImages: string;
  pokemonIndex: number;
  region: string;
}

const IndividualPokemonCard = (props: IndividualPokemonCard) => {
  const { pokemon, pokeImages, pokemonIndex, region } = props;

  return (
    <Link to={`/pokedex/${region}/${pokemon?.name}/${pokemonIndex + 1}`}>
      <img
        src={pokeImages}
        alt={pokemon?.name}
        className="w-32 h-32 flex items-center"
      />
      <span className="flex items-center">{pokemon?.name}</span>
    </Link>
  );
};

export default IndividualPokemonCard;
