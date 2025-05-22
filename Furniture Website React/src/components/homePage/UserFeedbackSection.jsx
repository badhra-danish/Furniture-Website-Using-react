import React from "react";
import UserFeedBackCard from "../userFeedback/UserFeed";
import feedbackimg from "../../images/Purchase Securely.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; // for fade effect;
const UserFeedBackSection = () => {
  return (
    <>
      <div className="user-feedback-section">
        <div className="user-FeedBack">
          <div className="section-heading">
            <h5>What Customer Says</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="user">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              spaceBetween={40}
              slidesPerView={1}
              effect="slide"
              speed={2000}
            >
              <SwiperSlide>
                <UserFeedBackCard
                  name="John Deo"
                  img={feedbackimg}
                  msg="Lorem5 smcdnc hsbajas dhbddsvsd dsf"
                  rating={4}
                />
              </SwiperSlide>
              <SwiperSlide>
                <UserFeedBackCard
                  name="Deo"
                  img="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                  msg="Lorem5 smcdnc hsbajas dhbddsvsd dsf"
                  rating={4}
                />
              </SwiperSlide>
              <SwiperSlide>
                <UserFeedBackCard
                  name="John Anderson"
                  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&s"
                  msg="Lorem5 smcdnc hsbajas dhbddsvsd dsf"
                  rating={5}
                />
              </SwiperSlide>
              <SwiperSlide>
                <UserFeedBackCard
                  name="Anderson"
                  img={feedbackimg}
                  msg="Lorem5 smcdnc hsbajas dhbddsvsd dsf"
                  rating={4}
                />
              </SwiperSlide>
              <SwiperSlide>
                <UserFeedBackCard
                  name="Jhon smith"
                  img={feedbackimg}
                  msg="Lorem5 smcdnc hsbajas dhbddsvsd dsf"
                  rating={5}
                />
              </SwiperSlide>
              <SwiperSlide>
                <UserFeedBackCard
                  name="David Mark"
                  img={feedbackimg}
                  msg="Lorem5 smcdnc hsbajas dhbddsvsd dsf"
                  rating={5}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserFeedBackSection;
