import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-28 flex items-center p-5 bg-blue-400 text-white">
      <Link to="/" className="mr-auto font-bold text-4xl">
        {" "}
        Pokemon
      </Link>
      <nav className="flex gap-4">
        <NavLink to="/pokemon"> Pokemon</NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
        <NavLink to="/games">Games</NavLink>
      </nav>
    </header>
  );
};

export default Header;
