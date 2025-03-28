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
         <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/images/background-coffee.jpg')" }} // Schimbă cu calea imaginii tale
  ></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-900 bg-opacity-90 w-full max-w-[80%] md:max-w-[60%] py-12 p-8 flex flex-col items-center justify-center rounded-xl shadow-lg">
    <div className="text-white p-8">
    <h1 className="text-2xl font-bold relative top-[-20px]">Our Collection</h1>
    <p className="text-gray-400 mb-4">Introducing our menu, a selection of unique flavours from all around the world. <br />
    Expertly roasted in small batches and shipped fresh weekly.</p>

    
    <div className="flex justify-center items-center gap-4 mb-6">
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
          className={`px-6 py-2 rounded-lg font-semibold text-lg transition ${
            showAvailable
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          onClick={() => setShowAvailable(true)}
        >
          Available Now
        </button>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {filteredProducts.map((product, index) =>(
            <CoffeeCard key={index}{...product}></CoffeeCard>
        ))}
        </div>
    </div>
    </div>
        </>
    );
}