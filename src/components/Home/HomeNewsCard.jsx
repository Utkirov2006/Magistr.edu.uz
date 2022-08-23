import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img from "../../images/example.jpg"


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const link=useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          340: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide onClick={()=>link("/news")}>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide onClick={()=>link("/news")}>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide onClick={()=>link("/news")}>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide onClick={()=>link("/news")}>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide onClick={()=>link("/news")}>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
