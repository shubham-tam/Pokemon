interface PokemonResults {
  name?: string;
}

interface IndividualPokemonProps {
  pokeData: {
    results: any[];
  };
  offset: number;
  regionIndex: number;
}

const IndividualPokemon = (props: IndividualPokemonProps) => {
  const { pokeData, offset, regionIndex } = props;

  const pokeImages = (index: number) => {
    const pokemonId = index + offset;

    return regionIndex > 4
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemonId + 1
        }.png`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          pokemonId + 1
        }.svg`;
  };

  return (
    <div className="grid grid-cols-5">
      {pokeData?.results?.map(
        (pokemon: PokemonResults, pokemonIndex: number) => (
          <div key={pokemonIndex}>
            <img
              src={pokeImages(pokemonIndex)}
              alt={pokemon?.name}
              className="w-32 h-32 flex items-center"
            />
            <span className="flex items-center">{pokemon?.name}</span>
          </div>
        )
      )}
    </div>
  );
};

export default IndividualPokemon;
