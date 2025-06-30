import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";

const Herosection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Your Favorite Food <br /> Delivery Partner
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          The food at your doorstep. Why starve when you have us. Your hunger
          partner. Straight out of the oven to your doorstep.
        </p>
        <div className="flex items-center justify-center md:justify-start bg-gray-100 rounded-full p-1 pr-1 shadow-sm">
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="bg-transparent flex-1 px-4 py-2 text-sm focus:outline-none"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300">
            Order Now
          </button>
        </div>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <div className="flex p-3 bg-gray-100 rounded-lg items-end gap-1">
            <FaApple className="text-3xl flex" />
            <div>
              <p className="text-xs">Dowbloded on the</p>
              <b>App Store</b>
            </div>
          </div>
          <div className="flex p-3 bg-gray-100 rounded-lg items-end gap-1">
            <IoLogoGooglePlaystore className="text-3xl flex" />
            <div>
              <p className="text-xs">Get it on</p>
              <b>Google Play</b>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-0">
        <img
          src="src/assets/delivery_boy.png"
          alt="Delivery Guy"
          className="w-[400px] h-auto bg-[beige] rounded-2xl object-cover transform -scale-x-100"
        />
      </div>
    </section>
  );
};

export default Herosection;
