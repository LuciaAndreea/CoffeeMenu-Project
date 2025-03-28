export default function CoffeeCard({image, name, price, rating, votes, tag, available}){
    return(
         
        <div className="bg-stone-900 text-white rounded-2xl p-4 shadow-lg w-60">
            <img src={image} alt="Coffee Photo" className="w-full h-32 object-cover rounded-xl" />
            {tag && <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs">{tag}</span>}
            <h3 className="mt-3 text-lg font-semibold">{name}</h3>
            <p className="text-green-400">${price}</p>
            {votes && (
        <p className="text-yellow-400 text-sm">
          ⭐ {rating} ({votes} votes)
        </p>
      )}
      {!available && <p className="text-red-500 text-sm">Sold out</p>}
        </div>
    )
}