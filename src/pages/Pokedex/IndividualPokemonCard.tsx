interface IndividualPokemonCard {
  pokemon: {
    name?: string;
    url?: string;
  };
  pokeImages: string;
}

const IndividualPokemonCard = (props: IndividualPokemonCard) => {
  const { pokemon, pokeImages } = props;

  return (
    <div>
      <img
        src={pokeImages}
        alt={pokemon?.name}
        className="w-32 h-32 flex items-center"
      />
      <span className="flex items-center">{pokemon?.name}</span>
    </div>
  );
};

export default IndividualPokemonCard;
