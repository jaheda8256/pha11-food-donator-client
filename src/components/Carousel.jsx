
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgimg1 from '../assets/nudos.jpg';
import bgimg2 from '../assets/pasta.jpg';
import bgimg3 from '../assets/bargar-testy.jpg';




// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


export default function Carousel() {
  return (
    <div className='mt-44 md:my-16'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Slide image={bgimg1} text='Yummy and tasty salat'></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide  image={bgimg2} text='Yummy and tasty salat'></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide   image={bgimg3} text='Yummy and tasty salat'></Slide>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
