import { useState } from "react"
import { IProduct } from "../data/models"
import axios from "axios"
import ErrorMessage from "./ErrorMessage"

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "description of your product :)",
  image: "https://picsum.photos/300",
  category: "electronic",
  rating: {
    rate: 4.2,
    count: 10,
  },
}

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (value.trim().length === 0) {
      setError("Please enter valid title.")
      return
    }

    productData.title = value

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    )

    onCreate(response.data)
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(e) => changeHandler(e)}
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-indigo-600 hover:bg-indigo-800 text-white rounded-md "
        // onClick={(e) => {
        //   handlerClick(e.target)
        // }}
      >
        Create
      </button>
    </form>
  )
}

export default CreateProduct
