import Link from "next/link";

export default function Home() {
  return (
    <>
    <section class="bg-blue-600 py-20">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-white font-bold text-5xl leading-tight mb-6">Discover the world's best coffee</h1>
                <p class="text-white text-xl mb-8">From hand-picked farms to your cup, we source the finest beans and
                    roast them to perfection.</p>
                <a href="#"
                    class="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200">Shop
                    now</a>
            </div>
            <div class="md:w-1/2">
                <img src="images/perros1.jpg" alt="perritos"
                    class="w-full rounded-lg shadow-lg"></img>
            </div>
        </div>
    </div>
</section>

<section class="py-20">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Featured products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="images/perros2.jpg" alt="perros"
                    class="w-full h-64 object-cover"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Single Origin Blend</h3>
                    <p class="text-gray-700 text-base">Our most popular blend, featuring beans from a single farm in
                        Ethiopia. Notes of chocolate, berries, and citrus.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$14.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="images/perros3.jpg" alt="perros"
                    class="w-full h-64 object-cover"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$12.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="images/perros4.jpg" alt="perros"
                    class="w-full h-64 object-cover"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$12.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="images/perros5.jpg" alt="perros"
                    class="w-full h-64 object-cover"></img>
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$12.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  );
}
