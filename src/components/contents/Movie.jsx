import React from 'react'
import { movieText } from '../../data/movie'
import { Link } from 'react-router-dom'

const Movie = () => {
  return (
    <section id='movie'>
      <h2>😎추천 영화를 소개합니다.</h2>
      <div className='video__inner'>
        {movieText.map((video, key)=>(
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt="" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Movie