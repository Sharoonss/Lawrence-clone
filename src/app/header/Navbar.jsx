import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Image src="/phn.png" alt="Phone" width={16} height={16} className="mr-2" />
            <span className="text-sm text-gray-600">+92 3208361916</span>
          </div>
          <div className="flex items-center">
            <Image src="/mail.png" alt="Email" width={16} height={16} className="mr-2" />
            <span className="text-sm text-gray-600">lawrenceviewhotel@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://facebook.com" className="text-gray-600 hover:text-blue-600">
            <Image src="/fb.jpg" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="https://instagram.com" className="text-gray-600 hover:text-pink-600">
            <Image src="/insta.png" alt="Instagram" width={20} height={20} />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-600 hover:text-blue-700">
            <Image src="/lidin.png" alt="LinkedIn" width={20} height={20} />
          </Link>
          <select className="ml-4 text-sm bg-transparent border-none focus:ring-0">
            <option>English (US)</option>
            {/* Add more language options here */}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;