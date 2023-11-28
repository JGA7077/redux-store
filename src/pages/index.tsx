import Head from 'next/head'
import {QueryClient, QueryClientProvider} from 'react-query';
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ProductList from '@/components/ProductsList'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import store from '@/redux/store';

export default function Home() {
  return (
    <>
      <Head>
        <title>Redux Store</title>
        <meta name="theme-color" content="#020617" />
      </Head>
      <QueryClientProvider client={queryClient} >
        <Provider store={store}>
          <Header />
          <ProductList />
        </Provider>
      </QueryClientProvider>
    </>
  )
}
