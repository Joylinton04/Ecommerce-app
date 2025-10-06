import assets from "@/assets/assets";

type Image = {
  image: string
}


export interface ProductProps {
  _id: string
  name: string
  price: number
  image: string[]
  category: 'Men' | 'Women' | 'Kids'
  sizes: string[]
  bestSeller: boolean
  stock: number
  description: string
}