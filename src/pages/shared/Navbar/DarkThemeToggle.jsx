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
      <input type="checkbox" className="toggle block" onClick={toggleTheme} />
      <p>
        <small>Dark / Light</small>
      </p>
    </div>
  );
};

export default DarkThemeToggle;
