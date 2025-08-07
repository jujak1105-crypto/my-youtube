import React from 'react'
import Main from '../components/section/Main'

import Today from '../components/contents/Today'
import Music from '../components/contents/Music'
import Movie from '../components/contents/Movie'
import Book from '../components/contents/Book'
import Anime from '../components/contents/Anime'

const Home = () => {
  return (
    <Main title="유튜브 채널" description="유튜브 채널 페이지 입니다.">
      <Today />
      <Music />
      <Movie />
      <Book />
      <Anime />
    </Main>
  )
}

export default Home