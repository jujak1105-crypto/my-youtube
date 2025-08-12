import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(()=> import ('./pages/Home'));
const Today = lazy(()=> import ('./pages/Today'));
const Music = lazy(()=> import ('./pages/Music'));
const Movie = lazy(()=> import ('./pages/Movie'));
const Book = lazy(()=> import ('./pages/Book'));
const Anime = lazy(()=> import ('./pages/Anime'));
const Youtube = lazy(()=> import ('./pages/Youtube'));
const Channel = lazy(()=> import ('./pages/Channel'));
const Video = lazy(()=> import ('./pages/Video'));
const Search = lazy(()=> import ('./pages/Search'));
const Not = lazy(()=> import ('./pages/Not'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/music" element={<Music />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelID" element={<Channel />} />
          <Route path="/video/:videoID" element={<Video />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="/*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App