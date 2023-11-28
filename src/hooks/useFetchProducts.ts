import { getProducts } from "@/components/ProductsList/api"
import { useQuery } from "react-query"

export const useFetchProducts = () => {
  const {data, isLoading, error} = useQuery('products', getProducts)

  return {data, isLoading, error}
}