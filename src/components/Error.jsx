const Error = ({mensaje}) => {
  return (
    <div className="bg-red-700 text-white font-bold text-center uppercase p-2 mb-3 rounded">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error