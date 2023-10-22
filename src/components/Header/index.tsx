/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <header className="bg-slate-950 py-5">
      <div className="header-content container mx-auto flex justify-between">
        <h1
          className="text-white text-3xl"
        >Redux Store</h1>

        <div className="cart">
          <img
            className="cursor-pointer w-8 h-8"
            src="/cart-icon.png"
            alt="Ícone de sacola de compras"
          />
        </div>
      </div>
    </header>
  )
}

export default Header