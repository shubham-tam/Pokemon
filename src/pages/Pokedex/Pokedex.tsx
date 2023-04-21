import { useState } from "react";
import { useQuery } from "react-query";

import IndividualPokemon from "./IndividualPokemon";
import { regions } from "../../utls/RegionUtls";

import { API_URL } from "../../constants/appConfig";

interface PokemonRegion {
  name: string;
  offset: number;
  limit: number;
  index: number;
}

const Pokedex = () => {
  const [selectedRegion, setSelectedRegion] = useState<PokemonRegion>({
    index: 0,
    name: "kanto",
    offset: 0,
    limit: 151,
  });
  const { isLoading, error, data } = useQuery(
    ["repoData", selectedRegion],
    () =>
      fetch(
        API_URL +
          `?offset=${selectedRegion?.offset}&limit=${selectedRegion?.limit}`
      ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  return (
    <>
      <div className="flex items-center justify-center p-13 gap-7">
        {regions?.map((region: PokemonRegion, index: number) => (
          <button
            key={index}
            className="p-5 bg-cyan-200 mt-4 mb-4"
            onClick={() => {
              setSelectedRegion({
                index: region?.index,
                name: region?.name,
                offset: region?.offset,
                limit: region?.limit,
              });
            }}
          >
            {region?.name}
          </button>
        ))}
      </div>

      <div>{selectedRegion?.name}</div>

      <div>
        <IndividualPokemon
          pokeData={data}
          offset={selectedRegion?.offset}
          regionIndex={selectedRegion?.index}
        />
      </div>
    </>
  );
};

export default Pokedex;
