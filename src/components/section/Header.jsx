import React from 'react'

import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiMonitor } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";

import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header_logo'>
        <a href="/">
          <em aria-hidden='true'></em>
          <span>my<br />youtube</span>
        </a>
      </h1>
      <nav className='header_menu'>
        <ul className='menu'>
          <li className='active'>
            <a href="/"><CiHome />홈</a>
          </li>
          <li>
            <a href="/today"><CiHeart />추천 영상</a>
          </li>
          <li>
            <a href="/music"><CiMusicNote1 />추천 음악</a>
          </li>
          <li>
            <a href="/movie"><CiMonitor />추천 영화</a>
          </li>
          <li>
            <a href="/book"><CiBoxList />추천 도서</a>
          </li>
          <li>
            <a href="/anime"><CiFaceSmile />추천 애니</a>
          </li>
          <li>
            <a href="/youtube"><CiYoutube />유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li><a href="/search/youtube">MyYoutube</a></li>
          <li><a href="/search/html">HTML</a></li>
          <li><a href="/search/css">CSS</a></li>
          <li><a href="/search/javascript">JavaScript</a></li>
          <li><a href="/search/react.js">React.js</a></li>
          <li><a href="/search/java">JAVA</a></li>
          <li><a href="/search/oracle">ORACLE</a></li>
          <li><a href="/search/spring">SPRING</a></li>
        </ul>
      </nav>
      <div className='header_sns'>
        <ul>
          <li><a href="httpsL//github.com"><FaGithub /></a></li>
          <li><a href="httpsL//youtube.com"><FaYoutube /></a></li>
          <li><a href="httpsL//google.com"><FaGoogle /></a></li>
          <li><a href="httpsL//instagram.com"><FaInstagram /></a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header