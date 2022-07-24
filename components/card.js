import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Card = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/products/[pid]",
      query: { pid: product.slug },
    });
  };
  return (
    <div onClick={handleClick} className="group shadow-md shadow-gray-300 w-60">
      <div className="flex justify-center justify-items-center p-1 relative">
        <div className="absolute top-3 right-3 z-10 bg-gray-300 p-1 rounded">
          <FaHeart size={20} />
        </div>
        <Image
          src={product.image}
          alt="Product Item"
          width={230}
          height={200}
          className="bg-slate-800"
        />
        <div className="hidden group-hover:block absolute bottom-0">
          <button className="flex justify-center border-[1px] text-xs font-bold  py-1 px-2 bg-amber-500 rounded-lg border-gray-700">
            <FaShoppingCart size={20} className="mr-2" />
            <span className="text-gray-900">ADD TO CART</span>
          </button>
        </div>
      </div>
      <div className="bg-gray-50 p-2">
        <h1 className="text-sm font-bold text-amber-500 mb-2 line-clamp-1">{product.name}</h1>
        <p className="text-[12px] text-gray-800 font-medium text-center mb-2">{product.brand}</p>
        <h1 className="text-xl text-center font-normal mb-2">₱{product.price}</h1>
      </div>
    </div>
  );
};

export default Card;
