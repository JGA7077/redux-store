import Head from 'next/head'
import {QueryClient, QueryClientProvider} from 'react-query';
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ProductList from '@/components/ProductsList'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient();
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { useState } from 'react';
import AddedProductAlert from '@/components/AddedProductAlert';

export default function Home() {
  const [showAddedProductAlert, setShowAddedProductAlert] = useState(false);

  return (
    <>
      <Head>
        <title>Redux Store</title>
        <meta name="theme-color" content="#020617" />
      </Head>
      <QueryClientProvider client={queryClient} >
        <Provider store={store}>
          <Header />
          <ProductList
            setShowAddedProductAlert={setShowAddedProductAlert}
          />
          <AddedProductAlert
            showAddedProductAlert={showAddedProductAlert}
          />
        </Provider>
      </QueryClientProvider>
    </>
  )
}
