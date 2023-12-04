import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="h-[60px] flex justify-between px-10 bg-indigo-600 text-white items-center sticky top-0 w-full z-10">
      <a href="/" className="font-bold text-2xl">
        moon market
      </a>

      <span className="flex gap-8 font-semibold text-sm">
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}
