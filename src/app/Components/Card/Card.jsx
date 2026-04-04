import Image from "next/image";
import React from "react";

const RecipeCard = ({ foodData }) => {
  console.log(foodData);
  const { title, foodImg, price, category } = foodData;

  return (
    <div className="lg:max-w-96 w-full mx-auto overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <img
          height={100}
          width={100}
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-extrabold text-gray-900">
            ${(price / 100).toFixed(2)}
          </span>
          <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
