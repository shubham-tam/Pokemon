import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Games, Home, Pokedex, Pokemon } from "./pages/index";
import { Layout } from "./components/index";
import { PokemonDetail } from "./pages/Pokedex/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:region/:name/:id" element={<PokemonDetail />} />
        <Route path="games" element={<Games />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
