import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { BookText } from '../data/book'

const Book = () => {

  const [loading, setLoading] = useState(true);
      
        useEffect(()=>{
          setTimeout(()=>{
            setLoading(false);
          }, 300);
        }, []);
      
    const bookClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main>
      <section id='moviePage' className={bookClass}>
        <h2>🥰추천 도서 페이지입니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={BookText} />
        </div>
      </section>
    </Main>
  )
}

export default Book