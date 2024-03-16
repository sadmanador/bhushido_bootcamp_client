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
      <input type="checkbox" className="toggle block bg-[#c33827]" onClick={toggleTheme} />
      <p>
        <small className="text-white">Dark / Light</small>
      </p>
    </div>
  );
};

export default DarkThemeToggle;
