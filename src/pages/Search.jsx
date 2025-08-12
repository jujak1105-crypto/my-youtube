import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch';
import { useParams } from 'react-router-dom';

const Search = () => {

  const {searchId} = useParams();
  const [videos, setVideos] = useState([]);

  console.log('searchId: '+searchId);

  useEffect(()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchId}&key=${process.env.REACT_APP_YOYTUBE_API_KEY}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setVideos(result.items)
    })
    .catch(error => console.log(error))
  }, [searchId]);

  return (
    <Main>
      <section id='searchPage'>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
      </section>
    </Main>
  )
}

export default Search