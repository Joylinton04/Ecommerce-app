import type { ProductProps } from '@/store/data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type ResponseProp = {
  success: boolean,
  allProducts: ProductProps[]
}

const useProduct = () => {
  return useQuery<ProductProps[], Error>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get<ResponseProp>("http://localhost:3000/api/product");
      return res.data?.allProducts.map((product) => {
        let sizes: string[] = [];

        try {
          // Case 1: Backend sent ["M","L","XL"] (valid JSON array)
          sizes = JSON.parse(product.sizes[0]);
        } catch {
          // Case 2: Backend sent "M,L,XL" (plain string)
          sizes = product.sizes[0].split(",");
        }

        return {
          ...product,
          sizes,
        };
      });
    },
  })
}

export default useProduct;