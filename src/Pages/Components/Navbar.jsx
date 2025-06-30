import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around gap-1.5 bg-slate-100 shadow-md">
      <div>
        <img
          src="src/assets/Mytray_logo.png"
          alt="Delivery boy"
          width={54}
          height={48}
        />
      </div>
      <ul className="w-1/4 flex items-center justify-evenly">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "text-gray-700"
            }
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "text-gray-700"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "text-gray-700"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="w-1/6 flex items-center justify-evenly ">
        <button className="px-6 py-2  text-black rounded-md border border-transparent hover:border-black hover:rounded-2xl transition-all duration-400">
          Login
        </button>
        <button className="w-[120px] h-[45px] m-2 flex gap-[30px] bg-red-500 items-center justify-center rounded-3xl text-lg text-white hover:bg-red-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
