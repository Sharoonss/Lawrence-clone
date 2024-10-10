import Navbar from "./header/Navbar";
import Nav from "./header/Nav"
import HeroSection  from "./Main/Main";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Nav />
      <HeroSection />
      <div>Footer</div>
    </div>
  );
}
