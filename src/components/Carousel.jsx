
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgimg1 from '../assets/male-volunteer-holding-food.jpg';
import bgimg2 from '../assets/charity-box-being-prepared.jpg';
import bgimg3 from '../assets/close-up-delivery.jpg';
import bgimg4 from '../assets/women-preparing.jpg';




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
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
        <Slide image={bgimg1} text='Donation for street children'></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide  image={bgimg2} text='Donation for street children'></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide   image={bgimg3} text='Donation for street children'></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide   image={bgimg4} text='Donation for street children'></Slide>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
