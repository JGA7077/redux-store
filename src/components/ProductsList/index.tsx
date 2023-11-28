/* eslint-disable @next/next/no-img-element */
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { RootReducer } from '@/redux/root-reducer';
import { useSelector } from 'react-redux';

interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number
  }
}

const ProductList = () => {
  const {data, isLoading, error} = useFetchProducts()
  console.log('data ==>', data);
  console.log('error ==>', error);

  const handleAddProduct = () => {

  }

  const {products} = useSelector((prevState: RootReducer) => prevState.cartReducer);

  console.log('products ==>', products);

  if (isLoading) return <span>loading</span>

  if (error) return <span>There&apos;s been an error on your request. Try again later.</span>


  return (
    <section>
      <ul
        className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-20"
      >
        {data.map((product: ProductItem) => (
          <li
            key={product.id}
            className="border w-full flex flex-col justify-between text-center gap-3 px-5 py-8 rounded-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-auto md:h-64 object-contain"
            />
            <strong>{product.title}</strong>
            <span>{(product.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            <button
              className="bg-slate-950 text-white rounded py-1 transition-all hover:scale-105 hover:drop-shadow-lg"
              onClick={handleAddProduct}
            >Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList