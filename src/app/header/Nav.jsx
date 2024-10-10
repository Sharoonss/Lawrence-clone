import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-300 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.jpeg" alt="Lawrence View Hotel" width={100} height={100} className="mr-4" />
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-red-600 hover:text-red-800">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="/rooms-rates" className="text-gray-600 hover:text-gray-800">Rooms & Rates</Link>
          <Link href="/gallery" className="text-gray-600 hover:text-gray-800">Gallery</Link>
          <Link href="/dine" className="text-gray-600 hover:text-gray-800">Dine</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </div>
        <div>
          <button className="bg-black text-white px-4 py-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
