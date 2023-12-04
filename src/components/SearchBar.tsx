interface SearchBarProps {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  sortByPrice: string
  setSortByPrice: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar({
  setSearchQuery,
  searchQuery,
  sortByPrice,
  setSortByPrice,
}: SearchBarProps) {
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSortByPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortByPrice(e.target.checked ? "asc" : "desc")
  }
  return (
    <div className="flex items-center justify-between mx-6 gap-6 py-3">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="border-2 rounded-xl dark:bg-gray-200 sm:w-[400px] w-[200px]  py-1 px-4 mb-2outline-0"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </form>

      <div className=" hover:cursor-pointer select-none flex items-center">
        <input
          type="checkbox"
          id="sortPrice"
          checked={sortByPrice === "asc"}
          onChange={handleSortByPriceChange}
          className=" hover:cursor-pointer bg-gray-200 hover:bg-gray-300 cursor-pointer 
          w-6 h-6 border-3 border-amber-500  text-red-600 focus:outline-none rounded-lg"
        />
        <label
          htmlFor="sortPrice"
          className="ml-2 text-sm hover:cursor-pointer dark:text-zinc-100 "
        >
          by Price
        </label>
      </div>
    </div>
  )
}
