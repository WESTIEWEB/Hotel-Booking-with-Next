import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import SearchComponent from "@/components/SearchComponent/SearchComponent";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SearchComponent />
      {/* featured rooms  */}
      <Gallery />
      {/* testimonials */}
    </>
  )
}

export default Home;