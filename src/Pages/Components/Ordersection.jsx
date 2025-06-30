import React from "react";

const Ordersection = () => {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold">
        More Than <span className="text-red-500 font-bold">10,000</span> Dishes
        <br />
        To Order!
      </h1>
      <p className="text-sm mt-2 text-gray-500">
        Welcome to The Biggest Network of Food Ordering & Delivery
      </p>

      {/* Top Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mt-10 justify-items-center">
        {["🍕 Pizza", "🍔 Burger", "🍣 Sushi"].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl px-6 py-4 text-center shadow-sm hover:border-2"
          >
            <div className="text-4xl">{item.split(" ")[0]}</div>
            <div className="mt-2 font-medium text-gray-700">
              {item.split(" ")[1]}
            </div>
          </div>
        ))}

        {/* Deals Card */}
        <div className="bg-gray-100 col-span-2 sm:col-span-1 rounded-xl px-6 py-4 text-left shadow-sm flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-gray-700">
            Find <span className="text-red-500 font-semibold">deals</span>,{" "}
            <span className="text-green-500 font-semibold">free delivery</span>,
            and more from our restaurant partners.
          </div>
          <div className="text-5xl mt-2 sm:mt-0">🛵</div>
        </div>
      </div>

      {/* Quotation Section */}
      <div className="flex mt-10 items-start text-left gap-4 max-w-3xl mx-auto">
        <div className="text-5xl text-gray-800">❝</div>
        <p className="text-gray-600 text-sm">
          “Welcome to the ultimate food delivery experience! Our platform
          connects thousands of hungry customers with their favorite local
          restaurants, offering more than 10,000 dishes across all cuisines —
          from pizza, burgers, and sushi to salads, pasta, and desserts.”
        </p>
      </div>

      {/* Bottom Category Cards */}
      <div className="grid grid-cols-3 gap-2 mt-10 justify-items-center">
        {["🍝 Pasta", "🥗 Salad", "🍰 Desserts"].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl px-6 py-4 text-center shadow-sm hover:border-2"
          >
            <div className="text-4xl">{item.split(" ")[0]}</div>
            <div className="mt-2 font-medium text-gray-700">
              {item.split(" ")[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordersection;
