import { Star } from 'lucide-react'

const products = [
  {
    id: 1,
    title: 'Essential Oversized Tee',
    price: 29,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Minimalist Sneakers',
    price: 89,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Soft Knit Cardigan',
    price: 59,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: 4,
    title: 'Classic Denim Jacket',
    price: 99,
    image: 'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=1200&auto=format&fit=crop',
    rating: 4.5,
  },
]

export default function FeaturedGrid() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Featured products</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Hand-picked favorites from our latest drop.</p>
        </div>
        <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">View all</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="line-clamp-1 text-sm font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-base font-bold text-gray-900 dark:text-white">${p.price}</span>
                <span className="inline-flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400">
                  <Star className="h-4 w-4 fill-current" /> {p.rating}
                </span>
              </div>
              <button className="mt-4 w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">Add to cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
