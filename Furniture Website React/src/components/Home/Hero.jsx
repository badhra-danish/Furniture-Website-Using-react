import React from "react";
import heroimg from '../../images/hero.png';
import abt1 from '../../images/about1.jpg'
import abt2 from '../../images/about2.jpg'
import abt3 from '../../images/about3.jpg'
import abt4 from '../../images/about4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination ,Autoplay, EffectFade} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-fade'; // for fade effect;
const HomeSection = () => {
    return(
        <>
           <div class="hero-main">
        <div class="hero-img">
            
            <Swiper
             modules={[Navigation,Pagination,EffectFade,Autoplay]}
             pagination={{clickable:true}}
             autoplay={{delay:4000 ,disableOnInteraction:false}}
             loop={true}
             slidesPerView={1}
             effect="fade"
             speed={2000}

            >  
              <SwiperSlide>
                <img src={heroimg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={abt1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={abt2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={abt3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={abt4} alt="" />
              </SwiperSlide>
            </Swiper>
            <div class="hero-card-main">
               <div class="hero-card">
                    <h6>New Arrival</h6>
                    <p class="title">Discover Our New Collection</p>
                    <p class="card-content">Lorem ipsum dolor sit amet consecteLorem ipsum dolor sit amet consecte 
                        tur adipisicing elit Lorem ipsum dolor sit amet consecte.</p>
                    <button class="card-btn">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default HomeSection;