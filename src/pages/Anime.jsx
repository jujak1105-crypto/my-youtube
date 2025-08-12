import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { AnimeText } from '../data/anime'
import VideoCard from '../components/video/VideoCard'

const Anime = () => {

  const [loading, setLoading] = useState(true);
        
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      }, 300);
    }, []);
        
  const animeClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id='moviePage' className={animeClass}>
        <h2>😘추천 애니 페이지입니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={AnimeText} />
        </div>
      </section>
    </Main>
  )
}

export default Anime