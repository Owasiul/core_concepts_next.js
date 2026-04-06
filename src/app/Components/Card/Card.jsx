import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeCard = ({ foodData }) => {
  // console.log(foodData);
  const { title, foodImg, price, category, id } = foodData;

  return (
    <div className="lg:max-w-96 w-full mx-auto overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
      {/* Image Section */}
      <div className="relative h-56 w-full group">
        <img
          src={foodImg}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600 shadow-sm backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-extrabold text-gray-900">
            ${(price / 100).toFixed(2)}
          </span>
          <Link href={`/foods/${id}`}>
            <button className="text-sm font-medium text-gray-500 hover:text-orange-600 transition-colors">
              View Details
            </button>
          </Link>
        </div>

        {/* Add to Cart Button */}
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 active:scale-[0.98] shadow-md hover:shadow-orange-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
