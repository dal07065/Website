import ShowDonut from "../components/ShowDonut.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Home() {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><ShowDonut model={"pancake.glb"}/></SwiperSlide>
        <SwiperSlide><ShowDonut model={"chungus.glb"} intens={1}/></SwiperSlide>
        <SwiperSlide><ShowDonut model={"BabyYodaBig.glb"}/></SwiperSlide>

      </Swiper>
      
      
  );
}
