"use client";

const categories = [
  {
    title: "موبایل",
     image: "/categories/mobile.jpg",
  },
  {
    title: "لپ تاپ",
    image: "/categories/laptob.jpg",
  },
  {
    title: "پوشاک",
   image: "/categories/apparel.jpg",
  },
  {
    title: "خانه",
    image: "/categories/category-home.jpg",
  },
  {
    title: "گیم",
    image: "/categories/sport.jpg",
  },
  {
    title: "کتاب",
    image: "/categories/book&media.jpg",
  },
  {
    title: "سوپرمارکت",
    image: "/categories/superMarket.jpg",
  },
  {
    title: "سلامت وپزشکی",
    image: "/categories/health.jpg",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-xl font-bold text-center mb-8">
          دسته‌بندی‌های خرید
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">

          {categories.map((item) => {
            const Icon = item.image;

            return (
                <div
                key={item.title}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-full bg-red-50 border border-red-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-red-100">
               
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain" />

                
                </div>

                <span className="mt-3 text-sm font-medium">
                  {item.title}
                </span>
              </div> 
            
         
            );
              
          })}

        </div>
      </div>
    </section>
  );
}