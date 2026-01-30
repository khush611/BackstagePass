"use client";

import { PassCard } from "./PassCard";

const passesData = [
  {
    id: 1,
    title: "Free Pass",
    description: "Daily workouts, progress charts, diet, and community access",
    price: "Free",
    priceLabel: "",
    isFree: true,
    isPopular: false,
  },
  {
    id: 2,
    title: "Golden Pass",
    description: "Daily workouts, progress charts, diet, and community access",
    price: "$499",
    priceLabel: "one time",
    isFree: false,
    isPopular: true,
  },
  {
    id: 3,
    title: "Platinum Pass",
    description: "Daily workouts, progress charts, diet, and community access",
    price: "$499",
    priceLabel: "one time",
    isFree: false,
    isPopular: false,
  },
  {
    id: 4,
    title: "Gold Pass 2",
    description: "Daily workouts, progress charts, diet, and community access",
    price: "$499",
    priceLabel: "one time",
    isFree: false,
    isPopular: false,
  },
  {
    id: 5,
    title: "Diamond Pass",
    description: "Daily workouts, progress charts, diet, and community access",
    price: "$499",
    priceLabel: "one time",
    isFree: false,
    isPopular: true,
  },
  {
    id: 6,
    title: "Silver Pass",
    description: "Daily workouts, progress charts, diet, and community access",
    price: "$499",
    priceLabel: "one time",
    isFree: false,
    isPopular: false,
  },
];

export function PassesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {passesData.map((pass) => (
        <PassCard
          key={pass.id}
          title={pass.title}
          description={pass.description}
          price={pass.price}
          priceLabel={pass.priceLabel}
          isFree={pass.isFree}
          isPopular={pass.isPopular}
        />
      ))}
    </div>
  );
}
