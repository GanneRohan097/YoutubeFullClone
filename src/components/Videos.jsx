
import React, { useEffect, useState } from 'react'
import { fetchTrendingVideos,searchVideos } from '../youtube'
const Videos = ({searchResult}) => {
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        const getVideos = async () =>{
            const data = await fetchTrendingVideos();
            console.log(data);
            setVideos(data);
        };
        const getSearchVideos = async ()=>{
            const data = await searchVideos(searchResult);
            console.log(data);
            setVideos(data);
            console.log(searchResult,"Fetched");
        }
        getSearchVideos();
        // getVideos();
    },[searchResult]);
  return (
    <div className=' text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
            {videos.map((video)=>(
            <div key={video.id}>
                <img className='w-[92%]' src={video.snippet.thumbnails.medium.url} alt="" />
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.channelTitle}</p>           
            </div>
            ))}
        </div>
    </div>
  )
}

export default Videos