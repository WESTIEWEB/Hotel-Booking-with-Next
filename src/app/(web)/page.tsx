import FeaturedRooms from "@/components/FeaturedRooms/FeaturedRooms";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import { getFeaturedRooms } from "@/libs/api";
import { RoomT } from "../models/rooom";

const Home = async () => {
  const featuredRooms = await getFeaturedRooms() as unknown as RoomT[];
  return (
    <>
      <HeroSection />
      <SearchComponent />
      <FeaturedRooms featuredRooms={featuredRooms} />
      <Gallery />
      <NewsLetter />
    </>
  )
}

export default Home;