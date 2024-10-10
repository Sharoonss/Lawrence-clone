// HeroSection.js
import Image from 'next/image';
 // Add your WhatsApp icon in public directory

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://i.pinimg.com/originals/62/e2/8f/62e28fa255cb5fa6d70467df0779baeb.jpg' }}>
      {/* Hero Content */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white text-center">
          {/* Add any text or content here */}
          <h1 className="text-4xl font-bold">Welcome to Our Hotel</h1>
          <p className="mt-4 text-lg">Experience luxury and comfort with us.</p>
        </div>
      </div>

      {/* WhatsApp Sticky Button */}
      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
        <div className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg">
          <Image
            src={'/public/logo2.png'}
            alt="WhatsApp"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>
      </a>
    </section>
  );
}
