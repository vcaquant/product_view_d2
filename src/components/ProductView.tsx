"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
      <div className="relative flex items-center gap-4">
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
          <div className="absolute -right-3 top-2 rounded-md bg-primary px-2 font-semibold text-primary-foreground">
            NEW
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-6">
        <div>
          <span className="text-sm font-bold">{props.company}</span>
          <h1 className="text-2xl font-bold">{props.title}</h1>
        </div>
        <p className="text-lg font-bold">{props.price}€</p>
        <div>
          <p className="mb-1 text-lg font-semibold">SIZE</p>
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
                    : "cursor-default bg-gray-300 text-gray-500 "
                } 
                size-12 rounded-md border-2 p-2 text-center text-sm font-semibold`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`rounded-full border-2 bg-white p-3 font-semibold text-secondary-foreground transition-all ${
              isFavorite ? "border-primary text-primary" : "border-white"
            }`}
          >
            <Heart fill={isFavorite ? "primary" : "white"} />
          </button>
          <button className="cart-button relative flex w-full justify-center gap-2 rounded-full bg-primary p-3 font-semibold text-primary-foreground hover:bg-primary/90">
            <ShoppingCart className="cart-animation" />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
};
