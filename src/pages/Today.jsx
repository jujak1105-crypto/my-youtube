import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/today'
import { Link } from 'react-router-dom'


const Today = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 300);
  }, []);

  const todayClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id='todayPage' className={todayClass}>
        <h2>😍추천 영상입니다.</h2>
        {todayText.map((today, key)=>(
          <div className='today__inner' key={key}>
            <div className='today_today__thumbthumb play__icon'>
              <Link to={today.page}>
                <img src={today.img} alt={today.title} />
              </Link>
            </div>
            <div className='today__text'>
              <span className='today'>today</span>
              <h3 className='title'>
                <Link to={today.page}>
                  {today.title}
                </Link>
              </h3>
              <p className='desc'>{today.desc}</p>
              <div className='info'>
                <span className='author'>
                  <Link to={`/channer/${today.channelId}`}>
                    {today.author}
                  </Link>
                </span>
                <span className='date'>{today.date}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Main>
  )
}

export default Today