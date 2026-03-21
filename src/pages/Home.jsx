import React, { useEffect, useState } from 'react'
import { fetchTrendingVideos } from '../youtube'
const Home = () => {
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        const getVideos = async () =>{
            const data = await fetchTrendingVideos();
            console.log(data);
            setVideos(data);
        };

        getVideos();
    },[]);
  return (
    <div className=''>
        {/* <h1>Trending</h1>
        {videos.map((video)=>(
            <div key={video.id}>
                <img src={video.snippet.thumbnails.medium.url} alt="" />
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.channelTitle}</p>           
            </div>
        ))} */}
    </div>
  )
}

export default Home