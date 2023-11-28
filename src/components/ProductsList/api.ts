export const getProducts = async () => {
  try {
    const response = fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())

    return response
  } catch (error) {
    return error
  }
}