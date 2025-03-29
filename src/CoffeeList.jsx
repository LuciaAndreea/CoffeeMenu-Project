import { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";

export default function CoffeeList(){
    const[products, setProducts] = useState([]);
    const[showAvailable, setShowAvailable] = useState(false);

    useEffect(() =>{
        fetch("/coffee.json")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error loading products:", err))
    }, []);

    const filteredProducts = showAvailable ? products.filter((product => product.available !== false)) : products;

    return(
        <>
         <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background-coffee.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
         }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <div className="bg-stone-900 bg-opacity-90 w-full max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] py-10 px-6 sm:px-8 md:px-12 flex flex-col items-center rounded-xl shadow-lg">
          
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our Collection
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center">
            Introducing our menu, a selection of unique flavours from all around the world. <br />
            Expertly roasted in small batches and shipped fresh weekly.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6 mb-6">
            <button
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                !showAvailable
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setShowAvailable(false)}
            >
              All Products
            </button>

            <button
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                showAvailable
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setShowAvailable(true)}
            >
              Available Now
            </button>
          </div>

          {/* Coffee Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-6 lg:px-8">
             {filteredProducts.map((product, index) => (
              <div key={index} className="w-full flex justify-center">
                <CoffeeCard {...product} />
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
        </>
    );
}