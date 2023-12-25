/* eslint-disable @next/next/no-img-element */
import { selectProductsCount, selectProductsTotalPrice } from '@/redux/cart/cart.selectors'
import { Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '@/redux/root-reducer'

interface CartProps {
  isCartVisible: boolean
  setIsCartVisible: Dispatch<SetStateAction<boolean>>
}

const Cart = ({ isCartVisible, setIsCartVisible }: CartProps) => {
  const productsCount = useSelector(selectProductsCount)
  const { products } = useSelector((prevState: RootReducer) => prevState.cartReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  console.log('products ==>', products)

  return (
    <section className={`fixed h-screen w-screen top-0 ${!isCartVisible && 'top-[-1000%]'}`}>
      <div className="w-full h-full bg-slate-800/[.7]" onClick={() => setIsCartVisible(false)}></div>

      <article className="bg-white w-full md:w-96 h-full z-10 absolute top-0 right-0 p-5">
        <header className="flex items-center justify-between">
          <div>
            <strong>Meu carrinho</strong>
            <span>({productsCount})</span>
          </div>

          <button
            type="button"
            className="bg-white rounded-full p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setIsCartVisible(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <ul className="flex flex-col gap-8 pt-8 h-[384px] md:h-[640px] overflow-y-scroll">
          {products.length ? (
            products.map((product) => (
              <li key={product.id} className="flex justify-between h-28 relative pt-4">
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
                >
                  <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
                </svg>
                <img src={product.image} alt={product.title} className="w-16 h-auto object-contain" />

                <div className="flex flex-col w-3/4 gap-1">
                  <p className="text-sm line-clamp-2">{product.title}</p>
                  <span className="text-xs">Quantidade: {product.quantity}</span>
                  <strong className="text-base">
                    {(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </strong>

                  <div className="w-1/3 flex justify-between border-b border-neutral-400">
                    <button className="w-4">-</button>

                    <span className="w-auto text-center">{product.quantity}</span>

                    <button className="w-4">+</button>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>
              <div className="flex justify-center items-center rotate-180">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: mt-4 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
              <strong className="text-center inline-block w-full">Seu Carrinho está vazio</strong>
            </li>
          )}
        </ul>

        {products.length ? (
          <div className="absolute w-full left-0 bottom-40 px-5 pr-7">
            <hr className="w-full pb-1 border-cyan-800" />
            <strong className="">Total: </strong>
            <strong className="">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(productsTotalPrice)}</strong>
          </div>
        ) : null}
      </article>
    </section>
  )
}

export default Cart
