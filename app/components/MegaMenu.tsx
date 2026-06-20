"use client";

import {
  Laptop,
  Menu,
  Smartphone,
  HomeIcon,
  Shirt,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    id: "mobile",
    title: "موبایل",
    icon: Smartphone,
    subCategories: [
      {
        title: "گوشی موبایل",
        items: ["سامسونگ", "اپل", "شیائومی", "نوکیا"],
      },
      {
        title: "لوازم جانبی",
        items: ["هندزفری", "پاوربانک", "شارژر"],
      },
    ],
  },

  {
    id: "laptop",
    title: "لپ تاپ",
    icon: Laptop,
    subCategories: [
      {
        title: "برندها",
        items: ["Asus", "Lenovo", "HP", "Dell"],
      },
    ],
  },

  {
    id: "home",
    title: "لوازم خانگی",
    icon: HomeIcon,
    subCategories: [
      {
        title: "دسته ها",
        items: ["یخچال", "ماشین لباسشویی", "جاروبرقی"],
      },
    ],
  },

  {
    id: "clothes",
    title: "پوشاک",
    icon: Shirt,
    subCategories: [
      {
        title: "پوشاک مردانه",
        items: ["تیشرت", "پیراهن", "شلوار"],
      },
      {
        title: "پوشاک زنانه",
        items: ["مانتو", "شومیز", "شلوار"],
      },
    ],
  },
];

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-2 font-medium">
        <Menu size={18} />
        دسته‌بندی کالاها
      </button>

      {open && (
        <div className="absolute top-full right-0 bg-white shadow-xl border rounded-lg w-[700px] h-[400px] z-50 flex">

          {/* Categories */}
          <div className="w-56 border-l bg-gray-50">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={`flex items-center gap-3 p-3 cursor-pointer transition
                    ${
                      activeCategory.id === category.id
                        ? "bg-white text-red-500 font-bold"
                        : "hover:bg-white"
                    }`}
                >
                  <Icon size={18} />
                  {category.title}
                </div>
              );
            })}
          </div>

          {/* Sub Categories */}
          <div className="flex-1 p-6 grid grid-cols-3 gap-8">
            {activeCategory.subCategories.map((sub) => (
              <div key={sub.title}>
                <h3 className="font-bold mb-3 text-red-500">
                  {sub.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {sub.items.map((item) => (
                    
                    <li key={item}>
                    <Link
                      href={`/store?brand=${item}`}
                      className="hover:text-red-500"
                    >
                      {item}
                    </Link>
                  </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}