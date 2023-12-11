import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white pt-16 pb-12 border-t border-gray-200">
        <div className="container grid grid-cols-3  gap-5">
          {/* Footer Image */}
          <div className="col-span-1 flex items-center justify-center">
            <Link href="/">
              <img src="images/logo.jpg" className="w-36 h-20" alt="Logo" />
            </Link>
          </div>
          {/* Footer Paragraph */}
          <div className="col-span-1 ">
            <p className="text-gray-400">
              Dazzle with Distinction, Shine with Shiva Jewellers.
              <br /> Crafting Timeless Elegance in Gold and Silver for every
              Occasion.
            </p>
          </div>
          {/* Footer Contact Us */}
          <div className="col-span-1">
            <div className="grid grid-cols-1 ">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Contact Us
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href="mailto:contactHp311@gmail.com"
                    className="text-gray-400 hover:text-gray-500 block"
                  >
                    <p>
                      <i className="fa-solid fa-envelope" />
                      <t /> Email Us
                    </p>
                  </a>
                  <a
                    href="tel:9336896680"
                    className="text-gray-400 hover:text-gray-500 block"
                  >
                    <p>
                      <i className="fa-solid fa-phone" />
                      <t /> Call Us
                    </p>
                  </a>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-gray-500 block"
                  >
                    <p>
                      <i className="fa-solid fa-address-card" />
                      <t /> About Us
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer links end */}
      </footer>
      {/* Footer end */}
      {/* Copyright */}
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white">©️ Shiva Jwellers - ALL RIGHTS RESERVED</p>
          <img src="images/logo.jpg" className="h-5" alt="Logo" />
        </div>
      </div>
      {/* End of copyright */}
    </>
  );
}
