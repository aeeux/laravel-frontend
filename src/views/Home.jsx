import Hero from "../components/home/Hero";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import Reviews from "../components/home/Reviews";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Reviews />
      <Footer />
    </div>
  );
}
