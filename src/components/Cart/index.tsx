import { Dispatch, SetStateAction } from 'react'
import { ProductItem } from '../ProductsList';
import CartItem from '../CartItem';

interface CartProps {
  isCartVisible: boolean;
  setIsCartVisible: Dispatch<SetStateAction<boolean>>;
  products: ProductItem[];
  productsTotalPrice: number;
  productsCount: number;
}

const Cart = ({ isCartVisible, setIsCartVisible, products, productsTotalPrice, productsCount }: CartProps) => {
  return (
    <section
      data-testid="minicart-container"
      className={`transition-all duration-400 ease-in fixed h-screen w-screen top-0 ${!isCartVisible ? 'right-[-1000%]' : 'right-0'}`}
    >
      <div className="w-full h-full bg-slate-800/[.7]" onClick={() => setIsCartVisible(false)}></div>

      <article className="bg-white w-full md:w-96 h-full z-10 absolute top-0 right-0 p-5">
        <header className="flex items-center justify-between">
          <div>
            <strong>My Cart</strong>
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
              <CartItem key={product.id} product={product} />
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
              <strong className="text-center inline-block w-full">Your cart is empty</strong>
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
