import ImageCarousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import slideData from '../jsons/mainCarousel.json'
import { SponsorBar } from "../components/SponsorBar";

const Home = () => {
  return (
    <div>
        <h1 className='accordion-title'>OUR JOURNEY:</h1>
        <ImageCarousel slides={slideData}/>
        <Accordion />
        <SponsorBar/>
    </div>
  )
}
export default Home;
