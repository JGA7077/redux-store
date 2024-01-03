/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import { ProductItem } from "../ProductsList"
import { removeProductFromCart, decreaseProductQty, increaseProductQty } from "@/redux/cart/actions";

interface CartItem {
  product: ProductItem;
}

const CartItem = ({product}: CartItem) => {
  const dispath = useDispatch();
  const handleRemoveClick = () => {
    dispath(removeProductFromCart(product))
  };

  const handleIncreaseClick = () => {
    dispath(increaseProductQty(product.id))
  };

  const handleDecreaseClick = () => {
    dispath(decreaseProductQty(product.id))
  };

  return (
    <li className="flex justify-between h-28 relative pt-4">
      <svg
        className="absolute top-1 right-0 cursor-pointer"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        fillRule="evenodd"
        height="14"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleRemoveClick}
      >
        <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
      </svg>
      <img src={product.image} alt={product.title} className="w-16 h-auto object-contain" />

      <div className="flex flex-col w-3/4 gap-1">
        <p className="text-sm line-clamp-2">{product.title}</p>
        <span className="text-xs">Quantity: {product.quantity}</span>
        <strong className="text-base">
          {(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </strong>

        <div className="w-1/3 flex justify-between border-b border-neutral-400">
          <button
            className="w-4"
            onClick={handleDecreaseClick}
          >-</button>

          <span className="w-auto text-center">{product.quantity}</span>

          <button
            className="w-4"
            onClick={handleIncreaseClick}
          >+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem