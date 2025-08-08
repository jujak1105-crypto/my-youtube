import React from 'react'
import {musicText} from '../../data/music';
import { Link } from 'react-router-dom';

const Music = () => {
  console.log(musicText);
  return (
    <section id='music'>
      <h2>💕추천 음악을 소개합니다.</h2>
      <div className='music__inner overflow'>
        {
          musicText.map((music, key)=>(
            <div className='music' key={key}>
              <div className='music__img play__icon'>
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
          ))
        }
      </div>
    </section>
  )
}

export default Music