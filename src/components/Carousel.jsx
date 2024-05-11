
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgimg1 from '../assets/nudos.jpg'



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
        <Slide image={bgimg1}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide></Slide>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
