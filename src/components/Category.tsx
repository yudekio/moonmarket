export function Category({ param, onClick }: any) {
  if (!param) return null
  let stringClass = ""
  switch (param) {
    case "women's clothing":
      stringClass = "bg-pink-400"
      break
    case "jewelery":
      stringClass = "bg-emerald-400"
      break
    case "men's clothing":
      stringClass = "bg-blue-500"
      break
    case "electronics":
      stringClass = "bg-gray-400"
      break
    default:
      stringClass = "bg-red-400"
      break
  }
  return (
    <div
      onClick={onClick}
      className={`${stringClass} py-1 px-3 rounded-full text-sm text-white cursor-pointer`}
    >
      {param}
    </div>
  )
}
