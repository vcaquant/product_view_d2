"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

export type ProductViewProps = {
  images: string[];
  title: string;
  price: number;
  description: string;
  sizes: SizeType[];
  company: string;
  new: boolean;
};

type SizeType = {
  size: string;
  available: boolean;
};

export const ProductView = (props: ProductViewProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(props.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex gap-20">
      <div className="flex gap-4 items-center relative">
        <div className="flex flex-col gap-4">
          {props.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="product"
              width={77}
              height={77}
              onClick={() => setCurrentPhoto(image)}
              className={`cursor-pointer rounded-md${
                currentPhoto === image ? " brightness-75" : ""
              }`}
            />
          ))}
        </div>
        <Image
          width={450}
          height={450}
          src={currentPhoto}
          alt="product"
          className="cursor-pointer rounded-md"
        />
        {props.new && (
          <div className="absolute top-2 -right-3 bg-primary text-primary-foreground px-2 rounded-md font-semibold">
            NEW
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-6 mt-4">
        <div>
          <span className="font-bold text-sm">{props.company}</span>
          <h1 className="text-2xl font-bold">{props.title}</h1>
        </div>
        <p className="text-lg font-bold">{props.price}€</p>
        <div>
          <p className="text-lg font-semibold mb-1">SIZE</p>
          <div className="flex flex-wrap gap-3">
            {props.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => size.available && setSelectedSize(size.size)}
                className={`${
                  size.available && selectedSize !== size.size
                    ? "bg-white "
                    : size.available && selectedSize === size.size
                    ? "bg-primary text-primary-foreground "
                    : "bg-gray-300 text-gray-500 cursor-default "
                } 
                w-12 h-12 p-2 border-2 rounded-md text-center font-semibold text-sm`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`transition-all border-2 bg-white text-secondary-foreground p-3 rounded-full font-semibold ${
              isFavorite ? "border-primary text-primary" : "border-white"
            }`}
          >
            <Heart fill={isFavorite ? "primary" : "white"} />
          </button>
          <button className="cart-button relative bg-primary text-primary-foreground p-3 rounded-full font-semibold flex gap-2 w-full justify-center hover:bg-primary/90">
            <ShoppingCart className="cart-animation" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
};
