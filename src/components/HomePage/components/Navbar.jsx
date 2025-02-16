import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full relative bg-white text-[#333333] text-sm font-[Tajawal]">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <div>
            <a href="https://projecto.app/ar/">
              <img
                src="img/whitearabprojectologo2.png"
                alt="Projecto logo"
                className="w-[190px] h-[60px] object-contain"
              />
            </a>
          </div>
          {/* Main Navigation */}
          <div className="mx-auto">
            <ul className="flex items-center space-x-5 rtl:space-x-reverse mx-4">
              <li>
                <a
                  href="https://projecto.app/ar/"
                  className="text-white text-[15px] transition-all duration-300 hover:opacity-80"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="/ar/pricing"
                  className="text-white text-[15px] transition-all duration-300 hover:opacity-80"
                >
                  الباقات
                </a>
              </li>
              <li>
                <a
                  href="/ar/support.html"
                  className="text-white text-[15px] transition-all duration-300 hover:opacity-80"
                >
                  المساعدة
                </a>
              </li>
              <li>
                <a
                  href="https://blog.projecto.app/"
                  target="_blank"
                  rel="noopener"
                  className="text-white text-[15px] transition-all duration-300 hover:opacity-80"
                >
                  المدونة
                </a>
              </li>
              <li>
                <a
                  href="https://app.projecto.app/Home/Index/?lang=ar"
                  className="text-white text-[15px] transition-all duration-300 border border-[#dadada] rounded px-4 py-1.5 hover:opacity-80"
                >
                  دخول
                </a>
              </li>
              <li>
                <a
                  href="https://app.projecto.app/Default/Register?lang=ar"
                  className="bg-white text-[#5D5BC3] text-[15px] transition-all duration-300 border border-[#dadada] rounded px-4 py-1.5 hover:opacity-80"
                >
                  التسجيل
                </a>
              </li>
            </ul>
          </div>
          {/* Language Switcher */}
          <div className="bg-white overflow-hidden rounded">
            <a
              href="https://projecto.app/"
              className="inline-block text-[#5D5BC3] font-semibold p-1.5 cursor-pointer"
            >
              EN
            </a>
            <a className="inline-block text-[#5D5BC3] font-semibold p-1.5 cursor-pointer bg-white shadow-inner">
              AR
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
