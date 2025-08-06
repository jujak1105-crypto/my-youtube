import React from 'react'
import { useLocation } from 'react-router-dom'
import { snsLink } from '../../data/header';

const Sns = () => {

  const location = useLocation();
  return (
    <div className='header_sns'>
        <ul>
          {
            snsLink.map((sns, key)=>(
              <li key={key}>
                <a href={sns.src} target='_blank'><span>{sns.icon}</span></a>
              </li>
            ))
          }
        </ul>
      </div>
  )
}

export default Sns