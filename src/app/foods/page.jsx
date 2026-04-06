import React from "react";
import RecipeCard from "../Components/Card/Card";
const getFoodsData = async () => {
  const data = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`,
  );
  const res = await data.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.foods || [];
};
const FoodPage = async () => {
  const api = await getFoodsData();
  return (
    <div className="px-4 w-full mx-auto my-3">
      <p className="text-4xl text-white font-semibold mx-4">
        Total: <span className="font-bold text-yellow-400">{api.length}</span>{" "}
        Data Found
      </p>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 items-center mx-auto py-4">
        {api.map((foodData) => {
          return (
            <RecipeCard key={foodData.id} foodData={foodData}></RecipeCard>
          );
        })}
      </div>
    </div>
  );
};

export default FoodPage;
