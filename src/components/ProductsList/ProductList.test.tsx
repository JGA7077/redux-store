import { renderHook, waitFor } from "@testing-library/react";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { QueryClient, QueryClientProvider } from "react-query";
import nock from "nock";

import request from 'supertest'
const ApiUrl = "https://fakestoreapi.com";

const mockedResponse = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  }
]

interface WrapperChildren {
  children: React.ReactNode;
}

describe('ProductList', () => {
  
  describe("while loading", () => {
    it("renders a loader", async () => {
      const queryClient = new QueryClient();
      const wrapper = ({ children }: WrapperChildren) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );

      const expectation = nock('https://fakestoreapi.com')
        .get('/products?limit=10')
        .reply(200, {
          data: mockedResponse
        });

      const { result } = renderHook(() => useFetchProducts(), { wrapper });

      await waitFor(() => expect(result.current.isLoading).toBe(true));
    });

  })

  describe("with an error", () => {
    it("renders an error message", async () => {
      const queryClient = new QueryClient();
      const wrapper = ({children}: WrapperChildren) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )

      const expectation = nock('https://faestoreapi.com')
        .get('/products?limit=10')
        .reply(404, {
          error: 'TypeError: Failed to fetch'
        })

      const {result} = renderHook(() => useFetchProducts(), {wrapper})
      await waitFor(() => expect(result.current.error).toBeDefined())
    })
  })

  describe("with data", () => {
    it("should return 200 and get a product array", async () => {
      return request(ApiUrl)
        .get("/products?limit=10")
        .expect(200)
        .then(response => {
          expect(response.body.data.length).toEqual(2);
        });
    });
  })
})