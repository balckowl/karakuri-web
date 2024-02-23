
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { useGameStore } from "../stores/GameStore";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useGameStore();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(darkMode)
  };

  return (
    <div>
      <li  onClick={toggleDarkMode}  className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-all">
        <p className="px-2 pt-3 pb-2">{darkMode ? "ライトモード" :"ダークモード"}</p>
        <button className="px-2">
          <FontAwesomeIcon icon={darkMode ? solidMoon : regularMoon} className="text-2xl"/>
        </button>
      </li>
    </div>
  );
};

export default DarkModeToggle;