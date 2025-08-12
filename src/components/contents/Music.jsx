import React, { useEffect, useState } from 'react'
import {musicText} from '../../data/music';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Music = ({videos, title, id}) => {
  // console.log(musicText);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },500);
  },[])

  const musicClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <section id={id} className={musicClass}>
      <h2>{title}</h2>
      <div className='music__inner'>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 15
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 15
            },
            2000: {
              slidesPerView: 10,
              spaceBetween: 15
            }
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
        {
          videos.map((music, key)=>(
            <SwiperSlide key={key}>
            <div className='music' key={key}>
              <div className='music__img play_icon'>
                <Link to={`/channel/${music.channelId}`}>
                  <img src={music.img} alt={music.name} />
                </Link>
              </div>
              <div className='music__info'>
                <Link to={`/channel/${music.channelId}`}>
                  {music.name}
                </Link>
              </div>
            </div>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
    </section>
  )
}

export default Music