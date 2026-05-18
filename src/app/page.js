import Banner from "./components/Banner";
import FeaturedFacilities from "./components/FeaturedFacilities";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <FeaturedFacilities></FeaturedFacilities>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </>
  );
}
