import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import IndividualPokemon from "./IndividualPokemon";
import { regions } from "../../utls/RegionUtls";
import { Button, Title } from "../../components";

import { API_URL } from "../../constants/appConfig";

interface PokemonRegion {
  name: string;
  offset: number;
  limit: number;
  index: number;
}

const Pokedex = () => {
  const navigate = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState<PokemonRegion>({
    index: 0,
    name: "kanto",
    offset: 0,
    limit: 151,
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    let region = searchParams.get("region");

    if (performance.navigation.type === 1) {
      searchParams.set("region", "kanto");
      region = "kanto";
      navigate(`?region=kanto`);
    }

    const selectedRegion = regions.find((r) => r.name === region);
    if (selectedRegion) {
      setSelectedRegion(selectedRegion);
    }
  }, [navigate]);

  const { isLoading, error, data } = useQuery(
    ["repoData", selectedRegion],
    () =>
      fetch(
        API_URL +
          `?offset=${selectedRegion?.offset}&limit=${selectedRegion?.limit}`
      ).then((res) => res.json())
  );

  if (isLoading) return <h1>"Loading...";</h1>;

  if (error) return <h2>"An error has occurred: ";</h2>;

  const handleRegionClick = (region: PokemonRegion) => {
    setSelectedRegion(region);
    navigate(`?region=${region.name.toLowerCase()}`);
  };

  return (
    <>
      <div className="flex items-center justify-center p-13 gap-7">
        {regions?.map((region: PokemonRegion, index: number) => (
          <div key={index}>
            <Button
              index={index}
              name={region?.name}
              event={() => handleRegionClick(region)}
            />
          </div>
        ))}
      </div>

      <Title title={selectedRegion?.name} identifier={"region"} />

      <IndividualPokemon
        pokeData={data}
        offset={selectedRegion?.offset}
        regionIndex={selectedRegion?.index}
      />
    </>
  );
};

export default Pokedex;
