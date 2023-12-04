interface ErrorMessageProps {
  error: string
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div>
      <p className="text-center text-red-500">{error}</p>
    </div>
  )
}

export default ErrorMessage
