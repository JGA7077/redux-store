/* eslint-disable @next/next/no-img-element */
import {useQuery} from 'react-query';

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

const getProducts = async () => {
  const response = fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())

    return response
}

const ProductList = () => {
  const {data, isLoading, error} = useQuery('products', getProducts)
  console.log('data ==>', data);

  const handleAddProduct = () => {

  }

  if (isLoading) return <span>loading</span>

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