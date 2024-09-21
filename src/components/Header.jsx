import { HEADERPHOTOURL } from "../utils/ProfileUtils";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { FiMoon, FiSun } from "react-icons/fi";
function Header() {
  const [activeTheme, setTheme] = useThemeSwitcher();
  return (
    <div className="flex items-center justify-around bg-slate-100">
      <header className="flex items-center justify-center p-3 gap-10">
    
        <a href="/">
          <h1 className="text-gray-400 hover:text-gray-700">About</h1>
        </a>
        <a href="/">
          <h1 className="text-gray-400 hover:text-gray-700">Projects</h1>
        </a>
        <a href="/">
          <h1 className="text-gray-400 hover:text-gray-700">Contact</h1>
        </a>
      </header>
      <div className="flex items-center p-1 mx-4 ">
        
        <button
          onClick={() => {
            setTheme(activeTheme);
          }}
          className="mx-3"
        >
          {activeTheme === "dark" ? (
            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
          ) : (
            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
          )}
        </button>
        <img
          src={HEADERPHOTOURL}
          className="max-h-12 mx-4 max-w-10 rounded-full"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Header;
