import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => {
      const newDarkMode = !prevDarkMode;
      document.documentElement.classList.toggle("dark", newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <div>
      <li  onClick={toggleDarkMode}  className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-all">
        <p className="p-2">モード切替</p>
        <button className="px-2">
          <FontAwesomeIcon icon={darkMode ? solidMoon : regularMoon} className="text-2xl"/>
        </button>
      </li>
    </div>
  );
};

export default DarkModeToggle;