import { useEffect, useState } from "react";

const DarkThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="ml-4 text-center">
        <input type="checkbox" className="toggle block" onClick={toggleTheme}/>
        <p><small>switch theme</small></p>
    </div>
    // <label className="swap swap-rotate">
    //   <input onClick={toggleTheme} type="checkbox" />
    //   <div className="swap-on">DARKMODE</div>
    //   <div className="swap-off">LIGHTMODE</div>
    // </label>
  );
};

export default DarkThemeToggle;
