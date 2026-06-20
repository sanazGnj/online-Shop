"use client";

import Link from "next/link";

import {
  Send,
  Phone,
  Mail,
  Heart, Star, User 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4">


        {/* Services */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-b text-center">

          <div>
            <div className="text-3xl mb-2">🚚</div>
            <p className="text-sm">ارسال سریع</p>
          </div>

          <div>
            <div className="text-3xl mb-2">💳</div>
            <p className="text-sm">پرداخت امن</p>
          </div>

          <div>
            <div className="text-3xl mb-2">🎁</div>
            <p className="text-sm">تخفیف ویژه</p>
          </div>

          <div>
            <div className="text-3xl mb-2">🛡️</div>
            <p className="text-sm">ضمانت کالا</p>
          </div>

          <div>
            <div className="text-3xl mb-2">☎️</div>
            <p className="text-sm">پشتیبانی ۲۴ ساعته</p>
          </div>

        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b">

         <div className="rtl">
            <h3 className="font-bold mb-4">ارتباط با ما</h3>

            <div className="flex gap-4 mb-4">
            
              <Send size={22} />
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex gap-2">
                <Phone size={16} />
                <span>021-12345678</span>
              </div>

              <div className="flex gap-2">
                <Mail size={16} />
                <span>info@example.com</span>
              </div>
            </div>
          </div>


          <div className="rtl">
            <h3 className="font-bold mb-4">راهنمای خرید</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>نحوه ثبت سفارش</li>
              <li>روش ارسال</li>
              <li>شیوه پرداخت</li>
              <li>پیگیری سفارش</li>
            </ul>
          </div>

          <div className="rtl">
            <h3 className="font-bold mb-4">خدمات مشتریان</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>پرسش‌های متداول</li>
              <li>بازگشت کالا</li>
              <li>حریم خصوصی</li>
              <li>قوانین سایت</li>
            </ul>
          </div>

          <div className="rtl">
            <h3 className="font-bold mb-4">درباره ما</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>تماس با ما</li>
              <li>فرصت‌های شغلی</li>
              <li>درباره فروشگاه</li>
              <li>همکاری با ما</li>
            </ul>
          </div>

         

        </div>

        {/*Newsletter */}
        {/* <div className="py-2 border-b">
          <h3 className="font-bold mb-4">
            عضویت در خبرنامه
          </h3>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="border rounded-lg px-4 py-3 flex-1"
            />

            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
              ثبت
            </button>
          </div>
        </div> */}

        {/* Bottom */}
        {/* <div  className="border-t bg-white dark:bg-zinc-900 dark:text-white">
          <div className="flex flex-col items-center gap-4 py-6 rtl">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            ما را دنبال کنید
          </h3>
          <div className="flex items-center gap-5"></div>
        <Link
              href="mailto:youremail@gmail.com"
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-zinc-800 transition"
              aria-label="Email"
            >
             <User className="text-blue-500" />
            </Link>

            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="p-2 rounded-full hover:bg-blue-200 dark:hover:bg-zinc-800 transition"
              aria-label="LinkedIn"
            >
              <Star className="text-yellow-500" />
            </Link>



            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="p-2 rounded-full hover:bg-blue-200 dark:hover:bg-zinc-800 transition"
              aria-label="LinkedIn"
            >
              <Heart className="text-red-500" />
              
            </Link>
         



          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است
          </p>
       </div>
         

</div> */}
      </div>
    </footer>
  );
}