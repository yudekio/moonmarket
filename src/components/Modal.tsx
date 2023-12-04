interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={onClose}
      ></div>
      <div className="w-[500px] p-5 rounded bg-white fixed top-20 left-1/2 -translate-x-1/2">
        <div
          className=" absolute right-6 top-4 bg-red-500 p-2 leading-none font-bold cursor-pointer hover:bg-red-600 text-gray-100 rounded-md"
          onClick={onClose}
        >
          X
        </div>
        <h1 className="text-center  text-2xl mb-6 ">{title}</h1>
        {children}
      </div>
    </>
  )
}

export default Modal
