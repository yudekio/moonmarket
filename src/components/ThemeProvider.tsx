import React, { useState, useEffect } from "react"

export const ThemeContext = React.createContext({
  themeMode: "light",
})

export function ThemeProvider({ children }: any) {
  const [themeMode, setThemeMode] = useState("light")

  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode")
    if (savedThemeMode) {
      setThemeMode(savedThemeMode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode)
    document.body.classList.toggle("dark", themeMode === "dark")
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{ themeMode }}>
      <div className={`theme-${themeMode}`}>
        <div
          className="fixed top-1 right-9 h-[86px] bg-indigo-600 font-semibold cursor-pointer text-white px-4 py-2 text-sm z-10 flex flex-col justify-end rounded-md select-none"
          onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
        >
          <p>Dark Mode 🌙</p>
        </div>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
