import { selectProductsCount } from "@/redux/cart/cart.selectors";
import { useSelector } from "react-redux";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  const productsCount = useSelector(selectProductsCount);

  return (
    <header className="bg-slate-950 py-5">
      <div className="header-content container mx-auto flex justify-between">
        <h1
          className="text-white text-3xl"
        >Redux Store</h1>

        <div className="cart flex items-center">
          <img
            className="cursor-pointer w-8 h-8"
            src="/cart-icon.png"
            alt="Ícone de sacola de compras"
          />
          <span className="text-white">({productsCount})</span>
        </div>
      </div>
    </header>
  )
}

export default Header