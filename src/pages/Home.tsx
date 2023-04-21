import { useQuery } from "react-query";

const Home = () => {
  // const { isLoading, error, data } = useQuery("repoData", () =>
  //   fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => res.json())
  // );
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://pokeapi.co/api/v2/pokedex/kanto").then((res) => res.json())
  );

  // if (isLoading) return "Loading...";

  console.log("data", data);

  return (
    <>
      <div>Home</div>

      {/* <img src={data?.sprites?.front_default} alt="" /> */}
    </>
  );
};

export default Home;
