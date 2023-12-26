import { selectProductsCount } from "@/redux/cart/cart.selectors";
import { useSelector } from "react-redux";
import Cart from "../Cart";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const productsCount = useSelector(selectProductsCount);

  return (
    <header
      className="bg-slate-950 py-5"
      data-testid="main-header"
    >
      <div
        className="container mx-auto flex justify-between"
        data-testid="header-content"
      >
        <h1
          className="text-white text-3xl"
        >Redux Store</h1>

        <div
          className="cart flex items-center"
        >
          <img
            className="cursor-pointer w-8 h-8"
            src="/cart-icon.png"
            alt="Ícone de sacola de compras"
            onClick={() => setIsCartVisible(true)}
          />
          <span className="text-white">({productsCount})</span>
        </div>
      </div>

      <Cart isCartVisible={isCartVisible} setIsCartVisible={setIsCartVisible} />
    </header>
  )
}

export default Header