import { useEffect, useState } from "react";

import { SVG_URL, PNG_URL } from "../../constants/appConfig";

import IndividualPokemonCard from "./IndividualPokemonCard";
import { Link } from "react-router-dom";

interface PokemonResults {
  name?: string;
}

interface IndividualPokemonProps {
  pokeData: {
    results: any[];
  };
  offset: number;
  regionIndex: number;
  region: string;
}

const IndividualPokemon = (props: IndividualPokemonProps) => {
  const { pokeData, offset, regionIndex, region } = props;

  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  const pokeImages = (index: number) => {
    const pokemonId = index + offset;

    return regionIndex > 4
      ? PNG_URL + `/${pokemonId + 1}.png`
      : SVG_URL + `/${pokemonId + 1}.svg`;
  };

  useEffect(() => {
    setLoadedImages([]);
    const imagesToLoad = pokeData.results.map((_, index) => index);

    const onLoad = (index: number) => {
      setLoadedImages((prev) => [...prev, index]);
    };

    imagesToLoad.forEach((index) => {
      const img = new Image();
      img.src = pokeImages(index);
      img.onload = () => onLoad(index);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeData.results, offset, regionIndex]);

  const checkAllImagesLoaded = pokeData.results.length === loadedImages.length;

  return (
    <>
      <div className="grid grid-cols-5">
        {checkAllImagesLoaded ? (
          <>
            {pokeData?.results?.map(
              (pokemon: PokemonResults, pokemonIndex: number) => (
                <div key={pokemonIndex}>
                  <IndividualPokemonCard
                    pokemon={pokemon}
                    pokeImages={pokeImages(pokemonIndex)}
                    pokemonIndex={pokemonIndex}
                    region={region}
                  />
                </div>
              )
            )}
          </>
        ) : (
          <div>Images loading please wait :'( '...</div>
        )}
      </div>
    </>
  );
};

export default IndividualPokemon;
