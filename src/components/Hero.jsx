import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/nse2C5qUeXyQq8kK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-24 sm:py-32 md:flex-row md:items-end md:gap-10 lg:px-8">
        <div className="max-w-xl text-center md:text-left">
          <span className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 ring-1 ring-inset ring-indigo-600/20 dark:text-indigo-300">New Arrivals</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Elevate your style with FashionFlow
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300">
            Discover premium fashion essentials crafted for comfort and confidence. Shop curated collections, trending fits, and timeless pieces.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500">Shop now</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">Learn more</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-gray-950" />
    </section>
  )
}
