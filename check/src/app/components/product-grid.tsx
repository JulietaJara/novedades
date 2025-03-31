import Image from "next/image"
import { Heart } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"

const products = [
  {
    id: 1,
    name: "Peluche con manta",
    price: "$24.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Floral Vase",
    price: "$19.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Scented Candle",
    price: "$12.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Decorative Mirror",
    price: "$34.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Soft Blanket",
    price: "$29.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Ceramic Mug",
    price: "$9.99",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden border border-pink-100 hover:shadow-md transition-shadow">
          <div className="relative">
            <div className="absolute top-2 right-2 z-10">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-pink-100">
                <Heart className="w-5 h-5 text-pink-500" />
              </Button>
            </div>
            <div className="relative h-48 bg-pink-50">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium text-pink-900">{product.name}</h3>
            <p className="font-bold text-pink-600">{product.price}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">Agregar al carrito</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

