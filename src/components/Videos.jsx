
import React, { useEffect, useState } from 'react'
import { fetchTrendingVideos,searchVideos } from '../youtube'
import { useNavigate } from "react-router-dom";
const Videos = ({searchResult,videos,setVideos}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        const getSearchVideos = async ()=>{
            const data = await searchVideos(searchResult);
            console.log(data);
            setVideos(data);
            console.log(searchResult,"Fetched");
        }
        getSearchVideos();
    },[searchResult]);
  return (
    <div className=' text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
            {videos.map((video)=>{
                const id = video.id?.videoId || video.id;
            return(
            <div key={id} onClick={()=>navigate(`/watch/${id}`)} className='cursor-pointer'>
                <img className='w-[92%]' src={video.snippet.thumbnails.medium.url} alt="" />
                <h3>{video.snippet.title}</h3>
                <p className='text-gray-400'>{video.snippet.channelTitle}</p>           
            </div>
            );
            })}
        </div>
    </div>
  )
}

export default Videos