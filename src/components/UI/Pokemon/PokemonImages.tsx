import { useState } from "react";

interface PokeImages {
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}

const PokemonImages = (props: PokeImages) => {
  const { sprites } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex gap-4 justify-center">
      <>
        <div>
          {isLoading && <div>Loading...</div>}
          <img
            src={sprites?.front_default}
            alt=""
            onLoad={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
            className="w-52"
          />
          <div>Regular</div>
        </div>
        <div>
          {isLoading && <div>Loading...</div>}
          <img
            src={sprites?.front_shiny}
            alt=""
            onLoad={handleImageLoad}
            style={{ display: isLoading ? "none" : "block" }}
            className="w-52"
          />
          <div>Shiny</div>
        </div>
      </>
    </div>
  );
};

export default PokemonImages;
