import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "./components/ui/button"
import ProductGrid from "./components/product-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <header className="sticky top-0 z-10 bg-white border-b border-pink-100 shadow-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="text-2xl font-bold text-pink-600">
            Novedades Check
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-pink-900 hover:text-pink-600">
              Incio
            </Link>
            <Link href="#products" className="text-pink-900 hover:text-pink-600">
              Productos
            </Link>
            <Link href="#" className="text-pink-900 hover:text-pink-600">
              Categorias
            </Link>
          </nav>
          <Button variant="outline" className="relative p-2 rounded-full bg-pink-100 border-pink-200 hover:bg-pink-200">
            <ShoppingBag className="w-5 h-5 text-pink-600" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-pink-500 rounded-full">
              0
            </span>
          </Button>
        </div>
      </header>

      <main>
        <section className="py-12 bg-gradient-to-b from-pink-100 to-pink-50">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-pink-900 md:text-5xl">Novedades Check</h1>
            <p className="max-w-2xl mx-auto mb-8 text-pink-700">
              Traemos lo ultimo en novedades para tu emprendimiento y para vos
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Comprar ahora</Button>
          </div>
        </section>

        <section id="products" className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center text-pink-900">Nuestros productos</h2>
            <ProductGrid />
          </div>
        </section>
      </main>

      <footer className="py-8 bg-pink-100">
        <div className="container px-4 mx-auto text-center text-pink-700">
          <p>© 2025 Novedades check. Derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

