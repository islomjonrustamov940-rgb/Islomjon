import React from 'react';

// Sumkalar ro'yxati (Siz yuborgan havolalar va qo'shimcha zamonaviy sumkalar)
const BAG_IMAGES = {
  bag1: "https://images.uzum.uz/d6m7etq1146th72thfa0/original.jpg",
  bag2: "https://mini-io-api.texnomart.uz/catalog/product/3584/358463/209818/9c497c79-7ea6-4e54-be64-83b3227f254a.webp",
  bag3: "https://mini-io-api.texnomart.uz/catalog/product/965/96580/206786/24e9d3cd-54f5-45e1-a10a-33c6790b86b0.webp",
  bag4: "https://images.uzum.uz/d6tujtbsv8vlb6mhnktg/original.jpg",
  // Qo'shimcha zamonaviy ryukzaklar (Sizning dizayningizga mos)
  bag5: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80",
  bag6: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=300&q=80",
  bag7: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80",
  bag8: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=300&q=80"
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#2B2C30]">
      
      {/* 1. NAVBAR */}
      <header className="bg-[#2B2C30] text-white py-5 px-6 md:px-24 flex justify-between items-center">
        {/* Logotip */}
        <div className="text-2xl font-black tracking-wider flex items-center select-none">
          <span className="text-white">B</span>
          <span className="text-[#FFA800]">a</span>
          <span className="text-white">g</span>
        </div>
        
        {/* Navigatsiya */}
        <nav className="hidden md:flex gap-10 text-xs font-bold tracking-widest text-slate-300">
          <a href="#" className="hover:text-[#FFA800] transition">HOME</a>
          <a href="#" className="hover:text-[#FFA800] transition">SHOP</a>
          <a href="#" className="hover:text-[#FFA800] transition">INFO</a>
          <a href="#" className="hover:text-[#FFA800] transition">ABOUT</a>
        </nav>

        {/* Tugma */}
        <button className="bg-[#FFA800] hover:bg-amber-500 text-[#2B2C30] font-black px-7 py-2.5 rounded text-xs tracking-wider transition">
          BUY NOW
        </button>
      </header>

      {/* 2. HERO SECTION */}
      <section className="bg-[#2B2C30] text-white px-6 md:px-24 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        {/* Chap taraf */}
        <div className="flex-1 space-y-6 max-w-xl z-10">
          <span className="text-[#FFA800] font-bold tracking-widest text-xs block">
            EVERY DAY NEW FASHION
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
            Look Stylish <br />
            Be <span className="text-slate-400 font-normal italic">Stylish.</span>
          </h1>
          <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="flex items-center gap-6 pt-2">
            <button className="bg-[#FFA800] hover:bg-amber-500 text-[#2B2C30] font-black px-8 py-3.5 rounded text-xs tracking-wider transition">
              BUY NOW
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">⚡</span>
              <div className="w-8 h-px bg-slate-600"></div>
              {/* New Trend nishoni */}
              <div className="bg-[#FFA800] text-[#2B2C30] w-12 h-12 rounded-full flex items-center justify-center font-bold text-[8px] text-center uppercase tracking-tighter shadow-lg leading-tight border-2 border-[#2B2C30]">
                New Trend
              </div>
            </div>
          </div>
        </div>

        {/* O'ng taraf (Model qiz o'rniga siz bergan eng hashamatli sumka foni bilan) */}
        <div className="flex-1 relative flex justify-center md:justify-end z-10 w-full">
          {/* Yashil brush effekti */}
          <div className="absolute right-0 md:right-[50px] top-6 w-[280px] md:w-[350px] h-[285px] md:h-[350px] bg-emerald-700/30 rounded-full filter blur-3xl -z-10"></div>
          
          <div className="relative w-full max-w-[360px] h-[360px] flex items-center justify-center p-4">
            <img 
              src={BAG_IMAGES.bag1} 
              alt="Featured modern backpack" 
              className="max-h-full object-contain rounded-2xl shadow-2xl bg-white/5 p-4 border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* 3. TABS SECTION */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-xs font-bold text-slate-400 mb-12 border-b border-slate-100 pb-4">
          <span className="hover:text-slate-800 cursor-pointer transition">Store Backpack</span>
          <span className="text-[#2B2C30] border-b-2 border-[#FFA800] pb-4 cursor-pointer">Changing System</span>
          <span className="hover:text-slate-800 cursor-pointer transition">In-built Battery</span>
          <span className="hover:text-slate-800 cursor-pointer transition">Modern Design</span>
        </div>

        {/* 4 ta siz yuborgan real sumka */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1-Sumka (Siz bergan 1-sumka) */}
          <div className="border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-between hover:shadow-lg transition bg-white relative">
            <div className="h-48 flex items-center justify-center relative w-full">
              <img src={BAG_IMAGES.bag1} alt="bag 1" className="max-h-full object-contain rounded-md" />
              <div className="absolute right-2 bottom-2 bg-slate-100 p-1.5 rounded-full border border-slate-200">
                <span className="text-xs">🔌</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFA800]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            </div>
          </div>

          {/* 2-Sumka (Siz bergan 2-sumka + Active ko'rinishi + Sariq Hoshiya + Quloqchin) */}
          <div className="border-2 border-[#FFA800] rounded-lg p-6 flex flex-col items-center justify-between hover:shadow-lg transition bg-white relative">
            <div className="h-48 flex items-center justify-center relative w-full">
              <img src={BAG_IMAGES.bag2} alt="bag 2" className="max-h-full object-contain rounded-md" />
              <div className="absolute right-0 bottom-0 bg-[#FFA800] p-2 rounded-full shadow-lg text-white">
                <span className="text-sm">🎧</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFA800]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            </div>
          </div>

          {/* 3-Sumka (Siz bergan 3-sumka) */}
          <div className="border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-between hover:shadow-lg transition bg-white relative">
            <div className="h-48 flex items-center justify-center relative w-full">
              <img src={BAG_IMAGES.bag3} alt="bag 3" className="max-h-full object-contain rounded-md" />
              <div className="absolute right-2 bottom-2 bg-slate-100 p-1.5 rounded-full border border-slate-200">
                <span className="text-xs">⚡</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFA800]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            </div>
          </div>

          {/* 4-Sumka (Siz bergan 4-sumka) */}
          <div className="border border-slate-200 rounded-lg p-6 flex flex-col items-center justify-between hover:shadow-lg transition bg-white relative">
            <div className="h-48 flex items-center justify-center relative w-full">
              <img src={BAG_IMAGES.bag4} alt="bag 4" className="max-h-full object-contain rounded-md" />
              <div className="absolute left-4 bottom-2 bg-pink-50 p-1.5 rounded-full border border-pink-200">
                <span className="text-xs">🧸</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFA800]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROMO BANNER (Uchta sumka va olovrang fon kompozitsiyasi) */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Chap taraf: 3 ta sumka va olovrang fon */}
        <div className="flex-1 flex justify-center relative w-full">
          {/* Orqadagi olovrang brush effekti */}
          <div className="absolute w-[300px] md:w-[400px] h-[200px] md:h-[260px] bg-amber-100/60 rounded-full filter blur-2xl -z-10 top-6 rotate-[-5deg]"></div>
          
          <div className="flex gap-2 items-end justify-center w-full">
            {/* Chapda bir oz bukilgan sumka */}
            <div className="opacity-80 transform -rotate-12 scale-90 w-32 h-40 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
              <img src={BAG_IMAGES.bag2} alt="bag" className="max-h-full object-contain" />
            </div>
            {/* O'rtada katta asosiy sumka */}
            <div className="z-10 transform scale-110 -translate-y-2 w-36 h-48 bg-white p-3 rounded-xl shadow-2xl flex items-center justify-center border border-slate-100">
              <img src={BAG_IMAGES.bag1} alt="bag" className="max-h-full object-contain" />
            </div>
            {/* O'ngda bir oz bukilgan sumka */}
            <div className="opacity-80 transform rotate-12 scale-90 w-32 h-40 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
              <img src={BAG_IMAGES.bag4} alt="bag" className="max-h-full object-contain" />
            </div>
          </div>
        </div>

        {/* O'ng taraf: Matnlar */}
        <div className="flex-1 space-y-6">
          <span className="text-[#FFA800] font-bold tracking-widest text-xs block">
            COMFORTABLE AND SECURE
          </span>
          <h2 className="text-3xl font-black text-[#2B2C30] leading-tight">
            Comfort For The Next Generation.
          </h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="bg-[#FFA800] hover:bg-amber-500 text-[#2B2C30] font-bold px-8 py-3.5 rounded text-xs tracking-wider transition">
            BUY NOW
          </button>
        </div>
      </section>

      {/* 5. AVAILABLE PRODUCTS (Och rangli kvadrat fonlar ichidagi 8 ta sumka) */}
      <section className="py-16 bg-[#FAFAFA] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-24 text-center">
          <h2 className="text-2xl font-black text-[#2B2C30] mb-2">Our Available Product</h2>
          <p className="text-slate-400 text-[11px] max-w-xs mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: BAG_IMAGES.bag1, bg: "bg-amber-50" },     // Och sariq fon
              { img: BAG_IMAGES.bag2, bg: "bg-blue-50" },      // Och ko'k fon
              { img: BAG_IMAGES.bag3, bg: "bg-red-50" },       // Och qizil fon
              { img: BAG_IMAGES.bag4, bg: "bg-pink-50" },      // Och pushti fon
              { img: BAG_IMAGES.bag5, bg: "bg-slate-100/70" }, // Och kulrang fon
              { img: BAG_IMAGES.bag6, bg: "bg-purple-50" },    // Och binafsha fon
              { img: BAG_IMAGES.bag7, bg: "bg-emerald-50" },   // Och yashil fon
              { img: BAG_IMAGES.bag8, bg: "bg-rose-50" }       // Och to'q pushti fon
            ].map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-slate-200/80 hover:shadow-lg transition flex flex-col items-center">
                {/* Biz xohlagan och rangli chiroyli fon kvadrati */}
                <div className={`${product.bg} w-full h-44 rounded-lg flex items-center justify-center p-4 mb-4`}>
                  <img src={product.img} alt="backpack product" className="max-h-full object-contain mix-blend-multiply rounded-md" />
                </div>
                {/* Nuqtali rang tanlagichlar */}
                <div className="flex gap-1.5 justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-transparent hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold px-8 py-3.5 rounded text-xs tracking-wider transition">
            VIEW ALL
          </button>
        </div>
      </section>

      {/* 6. FORM SECTION */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden border border-slate-200 shadow-xl">
          {/* Chap tomondagi rasm */}
          <div className="bg-slate-100 h-72 md:h-96 flex items-center justify-center p-8">
            <img src={BAG_IMAGES.bag3} alt="form product" className="max-h-full object-contain" />
          </div>
          {/* O'ng tomon to'q fonli forma */}
          <div className="bg-[#2B2C30] text-white p-10 md:p-14 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-black leading-snug">
              Lorem Ipsum Dolor Sitamet <br />adipiscing elit.
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="flex-1 bg-[#3A3B40] text-white placeholder-slate-500 border border-slate-700 p-3.5 rounded text-xs tracking-wider focus:outline-none focus:border-[#FFA800]"
                />
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  className="flex-1 bg-[#3A3B40] text-white placeholder-slate-500 border border-slate-700 p-3.5 rounded text-xs tracking-wider focus:outline-none focus:border-[#FFA800]"
                />
              </div>
              <button className="w-full bg-[#FFA800] hover:bg-amber-500 text-[#2B2C30] font-black py-3.5 rounded text-xs tracking-wider transition">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BRANDS */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-24 flex flex-wrap justify-between items-center gap-8 text-center text-sm font-black tracking-widest text-slate-400">
          <span className="uppercase text-lg italic tracking-wider">BlackBoy</span>
          <span className="uppercase text-lg italic tracking-wider">Titleist</span>
          <span className="uppercase text-lg italic tracking-wider">TaylorMade</span>
          <span className="uppercase text-lg italic tracking-wider">snake</span>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#2B2C30] text-white py-16 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="space-y-4">
            <div className="text-xl font-black tracking-widest">
              <span className="text-white">B</span>
              <span className="text-[#FFA800]">a</span>
              <span className="text-white">g</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-xs tracking-widest text-[#FFA800] uppercase">Useful Links</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h5 className="font-bold text-xs tracking-widest text-[#FFA800] uppercase">Contact Us</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>support@bagshop.com</li>
              <li>+998 (90) 123-4567</li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div className="space-y-4">
            <h5 className="font-bold text-xs tracking-widest text-[#FFA800] uppercase">Subscribe</h5>
            <div className="flex">
              <input 
                type="text" 
                placeholder="EMAIL..." 
                className="p-3 bg-[#3A3B40] text-white border border-slate-700 text-xs rounded-l w-full focus:outline-none"
              />
              <button className="bg-[#FFA800] hover:bg-amber-500 text-[#2B2C30] font-bold px-4 rounded-r text-xs transition">
                SEND
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}