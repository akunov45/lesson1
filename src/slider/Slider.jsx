import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation , Autoplay, Pagination,} from 'swiper/modules';

const Slider = (props) => {
  const {images} = props

  return (
      <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
        {images.map( imgUrl => {
          return <SwiperSlide>
            <img src={imgUrl} alt=""/>
          </SwiperSlide>
        })}
      </Swiper>
  );
};

export default Slider;