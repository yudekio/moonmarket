import { useState } from "react"
import { IProduct } from "../data/models"
import { Category } from "./Category"

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details
    ? "bg-rose-500  hover:bg-rose-600"
    : "bg-indigo-600  hover:bg-indigo-700"

  const BtnClasses = ["py-2 px-4 border text-white rounded-md", btnBgClassName]
  return (
    <div className=" relative gap-8 border-2 py-6 px-4 m-2 flex flex-col items-center max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 bg-white">
      <div className="flex justify-center items-center  mt-4 gap-2 absolute -z-3 left-4 top-1">
        <div className=" bg-yellow-400 rounded-full h-10 w-10 flex justify-center items-center">
          <div className="text-white font-bold leading-none">
            {product?.rating?.rate || "?"}
          </div>
        </div>
        <div className="font-bold text-gray-400 text-sm">
          {product?.rating?.count}
        </div>
      </div>
      <img src={product.image} className="w-1/3 " alt={product.title} />
      <Category param={product.category} />
      <div className="mt-auto text-center flex flex-col justify-center items-center gap-3">
        <a href="#">{product.title}</a>
        <p className="font-bold">{product.price} $</p>

        <button
          className={BtnClasses.join(" ")}
          onClick={() => setDetails((prev) => !prev)}
        >
          {details ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {details && (
        <div>
          <p className="text-gray-500">{product.description}</p>
        </div>
      )}
    </div>
  )
}
