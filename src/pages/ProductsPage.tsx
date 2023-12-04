import { Product } from "../components/Product"
import { useProducts } from "../data/products"
import Loader from "../components/Loader"
import ErrorMessage from "../components/ErrorMessage"
import Modal from "../components/Modal"
import CreateProduct from "../components/CreateProduct"
import { useContext } from "react"
import { IProduct } from "../data/models"
import { ModalContext } from "../context/ModalContext"
import SearchBar from "../components/SearchBar"
import { useState, useEffect } from "react"
import { Category } from "../components/Category"
import { ThemeContext } from "../components/ThemeProvider"

export function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts()
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortByPrice, setSortByPrice] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const { themeMode } = useContext(ThemeContext)
  let filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      const priceA = a.price
      const priceB = b.price
      if (sortByPrice === "asc") {
        return priceA - priceB
      } else {
        return priceB - priceA
      }
    })
  useEffect(() => {
    document.body.classList.toggle("bg-zinc-800", themeMode === "dark")
  }, [themeMode])

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }

  const categoryHandler = (category: string) => {
    setSelectedCategory(category === "Reset" ? "" : category)
  }

  let uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ]
  return (
    <>
      <div className="container mx-auto max-w-4xl pt-5 place-items-center grid grid-cols-1 gap-1 sm:grid-cols-2 py-6 dark:bg-neutral-900 border-neutral-800 bg-slate-200 min-h-screen ">
        <div className="col-span-1 sm:col-span-2">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortByPrice={sortByPrice}
            setSortByPrice={setSortByPrice}
          ></SearchBar>
        </div>
        <div className=" sm:col-span-2 col-span-1  flex gap-2 py-4 text-sm flex-col sm:flex-row sm:gap-6 text-center">
          <Category
            param={uniqueCategories[0]}
            onClick={() => categoryHandler(uniqueCategories[0])}
          />
          <Category
            param={uniqueCategories[3]}
            onClick={() => categoryHandler(uniqueCategories[3])}
          />
          <Category
            param={uniqueCategories[2]}
            onClick={() => categoryHandler(uniqueCategories[2])}
          />
          <Category
            param={uniqueCategories[1]}
            onClick={() => categoryHandler(uniqueCategories[1])}
          />
          {selectedCategory && (
            <Category param="reset" onClick={() => categoryHandler("")} />
          )}
        </div>
        {error && <ErrorMessage error={error} />}
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        {loading && <Loader />}
        {modal && (
          <Modal title="Create product" onClose={() => closeModal()}>
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}

        <button
          className="fixed bottom-10 right-10 bg-indigo-600 text-white text-2xl px-6 py-4 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
          onClick={() => openModal()}
        >
          +
        </button>
      </div>
    </>
  )
}
