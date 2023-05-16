
const Header = ({ data }) => {
  return (
    <header className="relative z-50 py-2">
      <div className="container mx-auto">
        <div className="text-white">
          <div className="flex items-center">
            <a href={`tel:${data.tel1.replace(/\s/g, '')}`}
              className="text-xl"
            >
              {data.tel1}
            </a>
            <span className="font-light ml-3">
              {data.rezhim1}
            </span>
          </div>
          <div className="flex items-center">
            <a href={`tel:${data.tel2.replace(/\s/g, '')}`}
              className="text-xl"
            >
              {data.tel2}
            </a>
            <span className="font-light ml-3">
              {data.rezhim1}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
